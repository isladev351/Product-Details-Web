let detail_tshirt= document.getElementById('select_object_thsirt');
let jumlah = document.querySelector('.jumlah');
const  btn_tambah= document.querySelector('.btn-plus-minus');
const view_total = document.querySelector('.view-total-harga');
const alert = document.querySelector('.alert');

const title_product = document.getElementById('tittle_product');

var harga = 250000
var jumlah_barang = 1000
var a = 1;


function tambah(){
    a = a+1;
    jumlah.innerHTML = '<a> '+a+' </a>';
    total_harga();
}


function kurang(){
    if ( a > 1 ){
        a = a-1;
        jumlah.innerHTML = '<a>'+a+'</a>';  
        total_harga();  
    }else{
        // membuat alert
        alert.style.display = 'flex'
        setInterval(()=>{
          alert.style.display ='none'
        },3000)
       
    }
}







