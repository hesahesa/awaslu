pemilu.caleg = function (obj) {
    this.id = obj.id;
    this.tahun = obj.tahun;
    this.lembaga = obj.lembaga
    this.jenis_kelamin =  obj.jenis_kelamin;
	this.agama = obj.agama;
	this.tempat_lahir = obj.tempat_lahir;
	this.status_perkawinan = obj.status_perkawinan;
	this.nama_pasangan = obj.nama_pasangan;
	this.jumlah_anak = obj.jumlah_anak;
	this.kelurahan_tinggal = obj.kelurahan_tinggal;
	this.kecamatan_tinggal = obj.kecamatan_tinggal;
	this.provinsi_tinggal = {
		id : obj.provinsi.id,
		nama : obj.provinsi.nama
	};
	this.dapil = {
		id: obj.dapil.id,
		nama : obj.dapil.nama
	};
	this.partai = obj.partai;
	this.urutan = obj.urutan;
	this.foto_url = obj.foto_url;
	this.kab_kota_tinggal = obj.kab_kota_tinggal;
	
};
