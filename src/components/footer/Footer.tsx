import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';


const Footer = () => {
  return (
    <div className='footer__container'>
      <div className='footer__container__text-socialmedia'>
        <p>¡Regístrate hoy y recibe un descuento del 20% en tu <br /> primera compra!</p>
        <div className='footer__container__text-socialmedia--socialmedia'>
          <a href='https://www.facebook.com/studiofinternational'><FacebookIcon style={{color: 'black', fontSize: 30}} /></a>
          <a href='https://www.instagram.com/studiofcolombia/'><InstagramIcon style={{color: 'black', fontSize: 30}} /></a>
          <a href='https://x.com/i/flow/login?redirect_after_login=%2Fstudiofcolombia'><TwitterIcon style={{color: 'black', fontSize: 30}} /></a>
          <a href='https://www.youtube.com/channel/UCvj2Mq1S1g-5-Jp87l_4fHg/videos'><YouTubeIcon style={{color: 'black', fontSize: 30}} /></a>
        </div>
      </div>
      <div className='footer__container__logo-categories'>
        <div className='footer__container__logo-categories__content'>
          <h1>NEWS <br />LETTER</h1>
          <div className='footer__container__logo-categories__content--info-select'>
            <p>Recibir información de moda para:</p>
            <div className='logo-categories__content--info-select'>
              <p><input type="checkbox" name="mujeres" id="mujeres" />Mujeres</p>
              <p><input type="checkbox" name="hombres" id="hombres" />Hombres</p>
              <p><input type="checkbox" name="ninios" id="ninios" />Niños</p>
            </div>
          </div>
          <div className='footer__container__logo-categories__content__date-email'>
            <input type="date" className='footer__container__logo-categories__content__date-email--date'/>
            <input type="text" placeholder='Correo electronico...' className='footer__container__logo-categories__content__date-email--email' />
            <p className='footer__container__logo-categories__content__date-email--btn-subs'>SUSCRIBIRME</p>
          </div>
          <div className='footer__container__logo-categories__content__terms-section'>
            <input type="checkbox" name="terms" id="terms" />
            <p>Sí autorizo a STF GROUP S.A. el tratamiento de mis datos personales, de acuerdo a las finalidades de su política de tratamiento de datos personales (Consúltala aquí).</p>
            <p>Certifico que he sido informado sobre los términos y condiciones de la página web (Consulta aquí los términos y condiciones)</p>
          </div>
        </div>
        
        <div className='footer__container__logo-categories__columns'>
          <div className='footer__container__logo-categories__columns__first-column'>
            <h4>DESCUBRE STUDIO F</h4>
            <ul>
              <li><a href='https://www.studiof.com.co/descubre-studiof/nuestra-marca'>Nuestra marca</a></li>
              <li><a href='https://www.studiof.com.co/descubre-studiof/reconocimientos'>Reconocimientos</a></li>
              <li><a href='https://www.studiof.com.co/trabaja-con-nosotros'>Trabaja con Nosotros</a></li>
              <li><a href='https://www.studiof.com.co/nuestra-marca-en-latinoamerica'>Nuestra marca en Latinoamérica</a></li>
            </ul>
          </div>
          <div className='footer__container__logo-categories__columns__second-column'>
            <h4>LINKS DE INTERÉS</h4>
            <ul>
              <li><a href='https://www.studiof.com.co/gift-card'>Gift Card Studio F</a></li>
              <li><a href='https://www.credi10.com.co/originacionecommerce'>Solicita tu cupo Credi10</a></li>
              <li><a href='https://www.studiof.com.co/servicio-al-cliente'>Servicio al cliente</a></li>
              <li><a href='https://www.studiof.com.co/notificaciones-judiciales'>Notificaciones judiciales</a></li>
              <li><a href='https://www.studiof.com.co/pqrs'>Radicar PQRS</a></li>
              <li><a href='https://www.studiof.com.co/tencard'>Ten Card Studio F</a></li>
              <li><a href='https://www.konnecta.net/iprov/logueo/stfgroup/iProveedor.htm'>Proveedores</a></li>
              <li><a href='https://www.studiof.com.co/tiendas'>Localiza tu tienda</a></li>
              <li><a href='https://www.studiof.com.co/links-interes/preguntas-frecuentes'>Preguntas Frecuentes</a></li>
              <li><a href='https://www.studiof.com.co/ayuda/canal-de-transparencia'>Canal de Transparencia</a></li>
              <li><a href='https://www.studiof.com.co/rastreo'>Rastrear pedido</a></li>
              <li><a href='https://www.credi10.com.co/originacionecommerce'>Solicita tu cupo Credi10</a></li>
              <li><a href='https://credi10.com.co/'>Recaudo Credi 10</a></li>
              <li><a href='https://www.studiof.com.co/login?ReturnUrl=%2f_secure%2fdevoluciones'>Devoluciones</a></li>
              <li><a href='https://www.studiof.com.co/sitemap'>Mapa del sitio</a></li>
            </ul>
          </div>
          <div className='footer__container__logo-categories__columns__third-column'>
            <h4>POLÍTICAS</h4>
            <li><a href='https://www.studiof.com.co/politicas/terminos-condiciones'>Términos y condiciones</a></li>
            <li><a href='https://www.studiof.com.co/politicas/politicas-proteccion-datos'>Aviso de privacidad</a></li>
            <li><a href='https://www.studiof.com.co/politicas/politicas-privacidad'>Políticas de Protección de Datos</a></li>
            <li><a href='https://www.studiof.com.co/politicas/politica-uso-cookies'>Política de Uso de Cookies</a></li>
            <li><a href='https://www.studiof.com.co/politicas/politica-cambios'>Política comercial de cambios</a></li>
            <li><a href='https://www.studiof.com.co/politicas/Promociones-y-eventos'>Promociones y Eventos</a></li>
            <li><a href='https://www.studiof.com.co/politicas/derecho-a-retracto'>Derecho a retracto</a></li>
          </div>
        </div>
      </div>
      <div className='footer__container__logos-bank'>
        <img src='https://studiofco.vteximg.com.br/arquivos/METODOS-DE-PAGO-STFCO-26092023.png?v=638313573580330000' alt="" />
        <img src='https://studiofco.vteximg.com.br/arquivos/LOGO-SIC-COLOMBIA-02102023.png?v=638318621127030000' alt="" />
      </div>
      <div className='footer__container__message'>
        <small>
        STF GROUP se encuentra comprometido con la transparencia y la legalidad en la realización de todas sus operaciones, y es por ello que pone a disposición del público en genral un canal de denuncias por posibles actos de corrupción o fraude que involucren directa o indirectamente a funcionarios de la compañía. Este canal permite realizar denuncias de forma anónima. Para acceder haz clic en el link Canal de transparencia ubicado en la parte inferior de nuestra página Links de Interés.
        </small>
      </div>
      <div className='footer__container__rights'>
        <small>
          © COPYRIGHT 2020 STF GROUP S.A. TODOS LOS DERECHOS RESERVADOS.
        </small>
      </div>
    </div>
  )
}

export default Footer