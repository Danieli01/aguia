import logo from '../../nome-logo.png'

export default function Header(){
    return (
        <div class="header">
        <nav class="navbar navbar-expand-lg navbar-dark bg-transparent list-header" >
            <a class="navbar-brand" href="/">
                <img src={logo} height="50" alt="logo da Águia"/>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Alterna navegação">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav justify-content-end ">
                <li class="nav-item active">
                    <a class="nav-link" href="/">Home<span class="sr-only">(Página atual)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/">Sobre</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/">Serviços</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/">Contato</a>
                </li>
                
                </ul>
            </div> 
        </nav>  
        </div>  
)}          