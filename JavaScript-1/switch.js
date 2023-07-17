var item = prompt("masukkan makanan/minuman : \n(cth: daging, susu, sayur, hamburger, soda, pizza)");

switch (item){
    case 'nasi' :
        alert("makanan/minuman ini SEHAT");
        break;
        case 'nasi' :
        case 'daging' :
        case 'susu' :
        case 'sayur' :
            alert("makanan/minuman ini SEHAT");
            break;
        case 'hamburger' :
        case 'soda' :
        case 'pizza' :
            alert("makanan/minuman ini TIDAK SEHAT");
            break;
        default :
            alert("makanan/minuman yang anda masukkan salah")
            break;                                                                                
}