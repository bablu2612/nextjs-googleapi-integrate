import styled from 'styled-components';

const HeaderWork = styled.div`
&
.container{
    width: 1170px;
    margin: 0 auto;
}
.mobile_header_section {
    display: none !important;
}
.headerSection{
    display:flex;
    justify-content: space-between;
    .navbar{
        display:flex;
    }
    ul.navbar li {
        margin-left: -136px;
    }
    li.firstli {
        margin-left: -410px !important;
    }
    li.thiredli {
        margin-right: 60px;
    }
    .logo img {
        margin-left: 90px;
        margin-top: 7px;
    }
}  
@media(max-width:2500px) {
    .navbar-header {
        display: none !important;
    }
    .navbar-collapse {
        display: block !important;
   }
}

@media(max-width:757px) {
    .navbar-collapse {
        display: none !important;
    }
    .navbar-header {
        display: block !important;
    }
    .open_collapse_nav {
        display: block !important;
    }
}  
`;

export default HeaderWork;