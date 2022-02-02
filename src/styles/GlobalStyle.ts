import { createGlobalStyle } from 'styled-components';

// CSS RESET

export const GloblaStyle = createGlobalStyle`
:root{
    font-size: 62.5%;
}

* {
    margin: 0;
    padding: 0;
    border: none;
    text-decoration: none;
    list-style-type: none;
    box-sizing: border-box;
    outline: none;
    font-family: 'Poppins', sans-serif
}
body{
    font-size: 1.6rem;
    color: #FFF;
}

#root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
.flex-center{
  display: flex;
  align-items: center;
  justify-content: center;
}
.card{
  background-color: ${({ theme }) => theme.color.dark};
  border-radius: 10px;
  padding: 10px;
}
@media(min-width:250px){
  :root{
    font-size: 9px;
  }
}
@media(min-width:350px){
  :root{
    font-size: 11px;
  }
}

@media(min-width:400px){
  :root{
    font-size: 13px;
  }
}



@media(min-width:600px){
    :root{
        font-size: 16px;
    }
}
`;
