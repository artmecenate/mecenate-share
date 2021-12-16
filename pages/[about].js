
import Head from 'next/head'
import Image from 'next/image'
import { FacebookShareButton, FacebookIcon} from 'next-share';

About.getInitialProps = async ({query}) => {

	const result = await fetch('https://api.artmecenate.com//users/image/portfolio/' + query.about);
	const data = await result.json()


    return {
        slug: query.about,
        info: data
        
    }
};




function About({slug,info}) {

	 //const router = useRouter()
     //const id = router.query.about

     console.log(info)



	return(
     <>
		 <Head>
            <meta property="og:type"               content="website" />
		    <meta property="og:title"              content="Mecenate" />
		    <meta property="og:description"        content="The agora for commissioners and artists" />
		    <meta property="og:image"              content={info[0].original} /> 
         </Head>

		<div>
			<h1> About: {slug} </h1>
			<img src = {info[0].original}/>

			<FacebookShareButton
			  url={'http://localhost:3001/bc157708-976b-4843-b051-75040342cf86'}
			  
			>
			  <FacebookIcon size={32} round />
			</FacebookShareButton>
			
			
		</div>
	</>

		)
}

export default About