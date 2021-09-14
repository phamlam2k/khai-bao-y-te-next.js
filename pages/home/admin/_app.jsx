
// import ListOfStaff from "./danhsachnhanvien/[id]";
// import ListOfStaffCovid from "./danhsachnhanvientudich/[id]";
// import ListOfStaffTrip from "./danhsachpheduyet/[id]";
import Admin from "./[id]";

function MyApp({ Component, pageProps }) {
    return (
        <Admin>
            
            <Component {...pageProps} />

        </Admin>
    )
  }
  
export default MyApp;