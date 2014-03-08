pemilu = {};
pemilu.util  = {};
pemilu.ui    = {};
pemilu.api = {
	API_BASE_URL : "http://api.pemiluapi.org/",
	API_PEMILU_KEY : "426c044849d8f98b1591c2643275eca3"
};
pemilu.config = {
	
	GET_AREA : pemilu.api.API_BASE_URL + "geographic/api/point?apiKey=" + pemilu.api.API_PEMILU_KEY,
	GET_CALEG : "",
    GET_ALL_LAPORAN : "./backend/getalllaporan.php",
	GET_ALL_LAPORAN_BY_AREA_ID : "./backend/getalllaporanbyareaid.php",
	GET_LAPORAN : "./backend/getlaporan.php",
	GET_MOST_SHARED_LAPORAN : "./backend/getmostsharedlaporan.php",
    GET_NUM_LAPORAN_BY_CALEG: "./backend/getnulaporanbycaleg.php",
    GET_NUM_LAPORAN_BY_PARTY: "./backend/getnumlaporanbyparty.php"
};