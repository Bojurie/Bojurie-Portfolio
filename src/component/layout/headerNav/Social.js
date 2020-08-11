import React from 'react';

const SocialMedia = () => {
  return (

    <div className="social-media">
        <ul>
          <a 
            href ='https://github.com/Bojurie?tab=repositories' target='blank'><i className="fab fa-github"></i>
          </a>
          {/* <a 
            href = '714-306-2369' target='blank'><i className="fas fa-phone-alt"></i>
          </a>
          <a 
            href = 'bojurier@gmail.com' target='blank'><i className="far fa-envelope"></i> 
          </a> */}
          <a 
          href = 'https://www.facebook.com/bojurie.rogers/' target='blank'><i className="fab fa-facebook-f"></i>
          </a>

          <a 
          href = 'https://www.instagram.com/bojuriescode/' target='blank' ><i className="fab fa-instagram"></i>
          </a>
        </ul>
    </div>
  )
}

export default SocialMedia;