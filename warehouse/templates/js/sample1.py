import cloudmersive_barcode_api_client
from cloudmersive_barcode_api_client.rest import ApiException
from pprint import pprint

# Configure API key authorization: Apikey
configuration = cloudmersive_barcode_api_client.Configuration()
configuration.api_key['Apikey'] = 'YOUR_API_KEY'



# create an instance of the API class
api_instance = cloudmersive_barcode_api_client.BarcodeLookupApi(cloudmersive_barcode_api_client.ApiClient(configuration))
value = 'value_example' # str | Barcode value

try:
    # Lookup EAN barcode value, return product data
    api_response = api_instance.barcode_lookup_ean_lookup(value)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling BarcodeLookupApi->barcode_lookup_ean_lookup: %s\n" % e)