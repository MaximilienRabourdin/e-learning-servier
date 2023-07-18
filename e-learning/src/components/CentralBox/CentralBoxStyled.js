import styled from "styled-components";


const CentralBoxStyled = styled.div`
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

.sidebar {
    width: 6rem;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    background-color:#0089E3;
    border-radius: 10px 0px 0px 10px;
};

.all_button {
    margin:0;
    padding:0;
    width:100%;
    height: 100%;
    list-style:none;
    display:flex;
    align-items:center;
    flex-direction:column;
    align-content:center;
}

.button{
    display:flex;
    align-items:center;
    flex-direction:column;
    text-align:center;
    margin: 1rem;
   align-content:center;

    a{
        margin-top:0.4rem;
        color: #FFF;
        font-family: Abel;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        f
    }
}

img{
    width:80%;
    cursor:pointer;
    
}


a {
    width:100%;
    height: 100%;
    position:center;
}

.right_section {
  width: 100%;
  display: flex;
  flex-direction: column;
}



.title_section {
  background-cover: url('../../../public/background_color_title.svg');
  width: 100%;
  align-self: flex-start;
}
    .title_page{
    color: #005994;
    font-family: Abel;
    font-size: 30px;
    margin-left:1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    }

    .step_bar {
    position: fixed;
    bottom: 1rem;
    left: 8rem; /* Ajustez la valeur left selon votre mise en page */
}



`;

export default CentralBoxStyled;
