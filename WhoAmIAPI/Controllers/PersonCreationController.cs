using Microsoft.AspNetCore.Mvc;
using System.Globalization;
using WhoAmIAPI.Models;


namespace WhoAmIAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PersonCreationController : ControllerBase
    {
        private readonly HttpClient _httpClient;

        public PersonCreationController(IHttpClientFactory httpClientFactory)
        {
            _httpClient = httpClientFactory.CreateClient();
        }

        [HttpGet]
        public async Task<IActionResult> Get([FromQuery] string name)
        {
            if (string.IsNullOrWhiteSpace(name))
                return BadRequest("Please submit a name");

            var agifyUrl = $"https://api.agify.io?name={name}";
            var agifyResponse = await _httpClient.GetFromJsonAsync<AgifyResponse>(agifyUrl);

            var genderizeUrl = $"https://api.genderize.io?name={name}";
            var genderizeResponse = await _httpClient.GetFromJsonAsync<GenderizeResponse>(genderizeUrl);

            var nationalizeUrl = $"https://api.nationalize.io?name={name}";
            var nationalizeResponse = await _httpClient.GetFromJsonAsync<NationalizeResponse>(nationalizeUrl);
            
            var desiredCountry = "";
            
            var countries = nationalizeResponse?.Country?.Select(c =>
            {
                try
                {
                    var region = new RegionInfo(c.CountryId);
                  
                    return new CountryInfo
                        {
                            Country = region.EnglishName,
                            Probability = c.Probability
                        };
                      
                }
                catch
                {
                    return null;
                }
            }).Where(c => c != null).ToList();
           
           desiredCountry = countries?.OrderByDescending(c => c.Probability).FirstOrDefault()?.Country ?? "";
            var result = new PersonInfo
            {
                Name = name,
                Age = agifyResponse?.Age,
                Gender = genderizeResponse?.Gender,
                Nationality = desiredCountry
            };

            return Ok(result);
        }
    }
}
