function Card(props){
    return <div style={{height:'80%' , flexWrap: 'wrap', overflow:''}} className='p-2 m-2'>
        <img src={props.imageSrc} width='100%' height='70%'  alt='' />
        <div className='p-3'>
            <p className='text-muted'> <b> {props.title}</b></p>
            <p className='text-muted'>{props.description}</p>
            <p >{props.price}</p>
            <img src="https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg" alt="noon-express" height="20px" width="60px" className='ex'></img>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="oneStar"><path d="M11.7519 5.34021L9.33396 7.42268C9.19635 7.54639 9.11772 7.75258 9.17669 7.93814L9.90404 11.0722C10.0023 11.5876 9.64848 12 9.23567 12C9.11772 12 8.98011 11.9588 8.86217 11.8763L6.22801 10.1649C6.07075 10.0619 5.87417 10.0619 5.7169 10.1649L3.1024 11.8557C2.98446 11.9381 2.84685 11.9794 2.7289 11.9794C2.31609 11.9794 1.92293 11.567 2.06053 11.0515L2.78788 7.91753C2.82719 7.73196 2.76822 7.52577 2.63061 7.40206L0.252007 5.34021C-0.23944 4.90722 0.0357703 4.06186 0.664823 4.02062L3.75111 3.79381C3.92803 3.7732 4.0853 3.64948 4.16393 3.48454L5.3434 0.474227C5.46135 0.164949 5.73656 0 6.01177 0C6.28698 0 6.56219 0.164949 6.68014 0.474227L7.85961 3.48454C7.93825 3.6701 8.09551 3.79381 8.27243 3.79381L11.3587 4.02062C11.9485 4.06186 12.2433 4.90722 11.7519 5.34021Z" fill="#f5a523"></path></svg><span className="text-muted">  5</span>

        </div>
    </div>
}
export default Card