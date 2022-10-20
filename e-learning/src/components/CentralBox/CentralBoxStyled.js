import styled from "styled-components";

const CentralBoxStyled = styled.div `
width: 100vw;
height: 100vh;
position:fixed;


.all-box{
    background: white;
    margin: 4rem 8rem;
    height: 84vh;
    width: 80vw;
    display:flex;
    filter: drop-shadow(0px 7px 36px rgba(0, 89, 148, 0.24));
    border-radius: 10px;
};

// Navbar start

.navbar {
    width: 6rem;
    height:100%;
    background-color:#0089E3;
    border-radius: 10px 0px 0px 10px;
};

.all_button {
    margin:0;
    padding:0;
    width:100%;
    list-style:none;
    display:flex;
    align-items:center;
    flex-direction:column;
    align-content:center;
}

.button{
    display:flex;
    align-items:center;
    flex-direction:center;
    align-content:center;
}

a {
    width:100%;
    height: 100%;
}

.right_section {
    width: 100%
    background-color:red;
}

.title_page{
    background-image:url("../../../public/background_color_title.svg");
    color: #005994;
    padding: 2rem; 
    margin: 0rem;
    font-family: 'Abel', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    z-index: 9999;
}


// Navbar End

`

export default CentralBoxStyled;