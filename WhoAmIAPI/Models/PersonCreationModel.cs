using System.Text.Json.Serialization;

// not ideal to create all the models in cs file.
// done due to test timing only

namespace WhoAmIAPI.Models
{
    public class AgifyResponse
    {
        public string Name { get; set; }
        public int? Age { get; set; }
    }

    public class GenderizeResponse
    {
        public string Name { get; set; }
        public string Gender { get; set; }
    }

    public class CountryProbability
    {
        [JsonPropertyName("country_id")]
        public string CountryId { get; set; }
        public double Probability { get; set; }
    }

    public class NationalizeResponse
    {
        public string Name { get; set; }
        public List<CountryProbability> Country { get; set; }
    }

    public class CountryInfo
    {
        public string Country { get; set; } = "";
        public double Probability { get; set; }
    }

    public class PersonInfo
    {
        public string Name { get; set; }
        public int? Age { get; set; }
        public string? Gender { get; set; }
        public string? Nationality { get; set; }
    }
}
