import  {  createGlobalStyle  }  from  'styled-components' 
import  reset  from  'styled-reset'

export default createGlobalStyle`
  ${reset}
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    
  }
  #root {
    margin: 0 auto;
  }
  body {
    background-image: linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%);
    background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);
    background-attachment: fixed;
    background-repeat: no-repeat;
  }
`;