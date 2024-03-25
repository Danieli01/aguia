import bannerImg from '../../moinho-de-aco.jpg';
import logoAguia from '../../aguia-logo.png';

export default function Banner(){
    return (
        <div class="banner">
            <img src={bannerImg} className="banner-img" width= "100%" alt="moinho de aço"/>
            <div className="banner-text">
                <img src={logoAguia} className="logo-aguia" width= "30%" alt="logo Águia"/>
                <h1>Especialistas nas indústrias de mineração e cimenteiras</h1>
                <span>Somos reconhecidos pela excelência em prestação de serviços de Engenharia, Segurança do Trabalho, Gerenciamento de Projetos; Reengenharia para Upgrade de Equipamento, Projetos Eletromecânicos; Serviços de Supervisão de Obras e de Contratos de Execução de Obras.</span>
                <button type="button" whidth="10" class="btn btn-outline-dark btn-sm"> Saiba mais </button>
            </div>
        </div>
    )
}

