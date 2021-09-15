import React, { useEffect, useState } from "react";
import { BrowserRouter as Router , Route, Switch, useHistory } from "react-router-dom";
import { useRouter } from "next/router";

import axios from "axios";
const Admin = ({children}) => {
  const history = useHistory();
  const [user, setUser] = useState({
    id: "",
    user : {

      email: "",
      password: "",
      admin: "",
      name: "",
      idStaff: "",

    }
  });
  
  useEffect(() => {
    return axios
      .get(`https://611b1bf022020a00175a4341.mockapi.io/User/${localStorage.getItem("accessToken")}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch(function (err) {
        // console.log(err.response);
      });
  }, []);

  const returnHome = () => {
    console.log('click')
    localStorage.removeItem("accessToken");
    Route.push("/")
  }

  return (

      <>
        <div className="body">
                <div className="body-top">
                    <div className="header-admin">
                        <div className="logo-rikkei">
                    
                            <img src='https://doanhnghiep.quocgiakhoinghiep.vn/wp-content/uploads/2020/11/rikkeisoft-logo.png' alt="" onClick={returnHome} />

                        </div>
                        <div className="icon-admin">
                            <span>
                                <i className="fas fa-bars"></i>
                            </span>
                            <span>
                                <i className="fas fa-bell"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="body-content">
                <div className="body-side">
                    <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAilBMVEX///8cHBwAAAASEhIaGhpNTU1XV1fKyspJSUn8/Pz39/cYGBg5OTkQEBCoqKjz8/MlJSUgICDf398ICAg6OjozMzNxcXE0NDQrKyvq6upoaGhfX18pKSnPz8/u7u50dHSfn5+9vb18fHybm5vBwcGvr6/X19eSkpKEhIRkZGRbW1tBQUGkpKSKioqhoWFVAAAJp0lEQVR4nO2dDVuyOhiAx7OhjoGAgOBHZpaaWf//751nw0xLg5nKeM/uLhQQvXazsW+IEIvFYrFYLBaLxWKxWCwWi8VisVgsFsu/BFd/ZLBcP3flyj/IysOlA8j63zRcFIS8Q8AcB0a4OXpajpoO0nVZwJCswZHAA3lxZVz+U4pLEL2nUtBhWQ8ovievTYfqanAyAuaIxNkhaPkOm8fN5mPWdPD+zoqT8d7uCJrQALZNh++PcOJB3IeTgruYfGo6jH+DYwbq/CbYfkUSiV/9MOeBtwEh7S0jn36PwPJ6hPGqpYb8gfhVUagI4KPpsF4CJy70aB1BmVS7TQf3EjCF1opBlVLzpkN7CWnNCFS0MUt9qJHJHERiC4v+xemazNlIfGk6wNokTMuQ9poOsC56idRRzap28axrGDw2HWRNOjo5qYS6TQdZD071LsP2XYgj3UTaOkPtjMYRftNh1uNF25Al7Wpf6MehA6umA62F/nXYtlqN988bkrR2y2lv2K5USsaBtmHLesG1a21MtCsv1S8u2lZrw8w01jNs3UBGqFvzhn7TQdajC7o177Y1EN8vKA/fmw60FssLDJdNB1qLOt353w3b1aF4Sc27Xdfh4ALDdtVpPM3OxPa1D0ndQZk9bevFIB96Xd5Yp/lo2SBiV7tHuGUDbJzEeheiiJsOsja/TsE4EYUtq5ZKtjpt4KCFo2tkRutnNglr5eSocFNXMRiHTQf2Qob1EmobB4B31OzKaF3z/ouwniG2KtpV2B+wqZNMWeI1Hc7LqdUQThZNB/MP1EqmMGg6mJfDyWN1gRGM23sVIrPKPjfWspbvDyo7bFrWAXWCj4o5wotWp1HF5td53m9NB+8KcPd8bpNsvfZHISqm58r9IG9xWf8FJ+GZAWGRz4yPQV4DlJifvhTlSEWdX1BnoYFTwftujMVZFeCdHRCGedmxWvELDovdJvo4Rj5QUelXbQg1foNR8O9eL/Dimt0wlYb1fiaI750pvdbtSruSoQN3biZ7Sc35MkmER6/PGK7xs6hmZ464cytyVYaZVgEdWSC4pwcxqIufzTpQ+Svl+bjvjKKy0566nQreD07HiUhUgX6v+pXyBN25218ZijpTYDgZnO3gZ/GgVjnnioYMg7eK8Kmyug/nL1mhOvN5xa+Qt6AhQ9qpPnAw+bUNzGBSow9DTYs307A7gapiM4BJZdBNNRw9F5V+pWPx/HuNxUhDvuxA7XlRFKCz/OViNMxQhvThEaD2QD6L0q2Pko8P5EwTwjBDMlpnoDEVg2VuNvV7DksgW59OreYYysbgE6ZOvRnQbpz20iJ1ZOEBnSf+s/Qwx5B479NamcthFBbbzKd+ti1PSwDT9x8VUFMMOVkmmtEnmfaKPJ2m+54OAcn3sShTDLH2kvmFVvwpq15RFL7vH+z+Pm3BDENOXkCkcaYj6OcyQ4p6214aH02a/mZjhiEJgUlDtouZfWYqHKbWmeqQ+dyvul+ylKmentgp38sjVEqdHaZTQwyHWZ75aMiyNI0dkWPCi5gs7HI/FzJHSX3MMXGnUsCP8ziTqTPFuMSMlMk9cpGyUTbk3pejGYYrJqa+NCwKx49EGsWR48dO5Atc8xmusIgVuMhiwckyVMckHUVRHjl5FrM8iuMIlziXxwpYeV9ZqhmGi2RbMAw0ptQ0wkgo8h7zY+EzP8ujLGK+kKVCqqLZQc20QJkUM5mpIw0dH89PMfXzwsdPRZotyNcMFCMMPWmBSpnwMbgsjzER5gXuwd0Yobh7Wojc8YUvI4mhDHPwOhR4LliMhlGWM+EXEZaMGPeYfIEbFocDB1MaBj+jpaGDV1QmpGGsMiDhR6UhigtHSEOZ0wghjdAwznK5N5ILbhdZdNBuNMJwRZMswQuJQhEFAA6bxlh0A2S4G4pgCoWIAV+hSAqslRcxVrUBE6qI8PBplATRVG5TtWSQxbAi3Au5OYY8DEPPwwXfQ75fUy9hOFMrPJx5uJR7PXWQXPV2B31uh7zc5t5sFppjiCdcwtU7bnreblu+YuDle7mE5Sdf35FvfLeUx5TfNs1QhZcot8+tvStXpnIfJ+U633+F775Smn5+3duJGpRKq+DH6/zUZ2db+UYZhptOZ7gL6scYGb72R7uG/3g4fi3nkXLSHeKG/KGOGjmbj8cL1fr1xp2fI2lGGfaB0l1YPEgCUJTTRzcQBDAh+88CORnqHT9F4wQPVbcjjNT2NwwylEMUwknKx5R4iSM6b64DLIll1Klbg6Ec2F7KXipp2IdgiN+TVW9149NIbX/DIEMMoHAdQVUy9RI1PMqX4CQy6sYBHdNd068TZG/00FDEQuSkBYZzgK5Ly1vrpaFKnk+gomscwAuUt8YMIFmPjwxpJ2VyepTxhj0K8mGzQ5kU94YkFfCsDFcdpUXWAIPJsaG7BBFx4w0xbsbyeaWgCsK94WsiL01puAQ1LMpoTo5TKU0JYzA33vAZZALFiJSZxpfhHIJNaRiCmMpvY5x2vhv28cxw0w1zSj0VapmzfBk+QzBWhg/kTb4ME5T7YUgKBs+h2YYroJ3BaiVzltmh4SKRM52V4RKSBVf5zbdU6ssciYmByYZczrQUsoQvZ41+GWZqJFQZhlgQ4sXYP2Uoc6SPxGBDQiJGy0qMegaENFSVNCwQ5URgZSin7wdq/wnDcmTZYMMHoO5ogLwopc8Svw8xyFpOaSgnDavL9IShmrRhsuFr8tlZjcnyXRqKnrsFzCJTWXqUhnKKkMpqTxnKWRsGG3KafM5KX0OylbXrpEy0C9Xm24C6IX0MgSouO3BY84aMlMcEBte8w8nk82m5g8kEm1Dr4ePj42L9tOsW7L9t5AlYbSZzuTl/2+DV+DCZyKnsi7e1OsZ7HY5/3pdviiEnR43YiokyvM5BO0wxPNL7pvsDfnCceudH28cYY3gzrOEtsIbXxRreAmt4XazhLbCG18Ua3gJreF2s4S2whtfFGt6C/4khi1669+AlYvc3LG9HY3Af1JzTO9+dx+v/L6crIZw738195rbQ2wHr+woSvtV9nPWfiGF75yjkxJtAElTe33odggQmTTxAo7twe/fBXbTswZiWJun2qm7ePnkv9s8RwZJh5b3gp+jdMsm+wEWZy5mHIPOLsqrgpv/MRPvZuSVBr3+KnvZ/+VDctPo2u7CcpycrY7qPi/40vOmzTieXnfZrEkxuKchnl574q0GPb/q6PoP4sszmSgTg3Pwpi9584jbHZH7zZ7iY/mwui8VisVgsFovFYrFYLBaLxWKxWCwWi8VisVgsFovFYrFYLBbL3/gPNE6w4dPODz4AAAAASUVORK5CYII="
                    alt=""
                    />
                    <div className="name_admin">
                    <h3>{user.user.name}</h3>
                    <p>Manage</p>
                    </div>
                    <ul className="menu-admin">
                    <li>
                        <a href={`/home/admin/danhsachnhanvien`}>
                        Danh sách nhân viên
                        </a>
                    </li>
                    <li>
                        <a href={`/home/admin/danhsachnhanvientudich`}>
                        Danh sách nhân viên ở vùng dịch
                        </a>
                    </li>
                    <li>
                        <a href={`/home/admin/danhsachpheduyet`}>
                        Danh sách cần được phê duyệt
                        </a>
                    </li>
                    </ul>
                </div>
                <div className="body-side-right">
                    {children}
                </div>
            </div>
            </div>
      </>
  );
};

export default Admin;
