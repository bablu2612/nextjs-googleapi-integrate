import styled from 'styled-components';

const HeaderStyles = styled.div`
.container{

        width: 1170px;
        margin: 0 auto;
    
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
    }
`

export default HeaderStyles;