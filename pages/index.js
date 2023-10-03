import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';
import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import {SiMicrosoftsqlserver, SiMysql, SiMongodb, SiHtml5, SiCss3, SiDotnet, SiReact, SiTailwindcss} from 'react-icons/si'
import {BiLogoPostgresql, BiLogoJavascript} from 'react-icons/bi'
import {FaNode} from 'react-icons/fa'
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

export default function Index({ posts, globalData }) {

  const portfolioItems = [
    // Substitua isso pelos dados reais do seu portfólio
    { title: 'CWB Weather', description: 'Monitoramento do clima de Curitiba.', link: 'https://cwbweather.vercel.app/' },
    { title: 'Next BI', description: 'Aplicação voltada para Business Intelligence em Next.js e Tailwind CSS.', link: 'https://nextbi.vercel.app/' },
    { title: 'Monitor Infra', description: 'Monitoramento de Servidores, dispositivos de rede, espaço em disco e consumo de banda na rede.', link: 'https://monitorinfra.vercel.app/' },
  ];

  return (
    <Layout>
     <Head>
        <title>Hudson Lima</title>
        <meta name="description" content="Data Analyst, Business Intelligence" />
        <link rel="icon" href="" />
      </Head>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <Header name={globalData.name} />
      <main className="w-full">
        <h1 className="text-3xl lg:text-5xl text-center mb-12">
          {globalData.blogTitle}
        </h1>
        <br />
        <div className='text-3xl font-extralight'>Expertise nas tecnologias</div>
        <br />
        <div className="flex items-center justify-center space-x-4 mt-4 transition-all">
          <FaNode size={50} color='lightgreen' title='Node.js'/>
          <BiLogoJavascript size={50} color='yellow' title='Javascript'/>
          <SiHtml5 size={50} color='#EF652A' title='HTML5'/>
          <SiCss3 size={50} color='#2965f1' title='CSS3'/>
          <SiReact size={50} color='#2ff9ff' title='React.js'/>
          <SiDotnet size={50} color='gray' title='Microsoft .NET'/>
          <SiTailwindcss size={50} color='cyan' title='Tailwind CSS'/>
        </div>
        <br />
        <div className='text-3xl font-extralight'>Integrações</div>
        <div className="flex items-center justify-center space-x-4 mt-4 transition-all">
          <SiMicrosoftsqlserver size={50} color='' title='Microsoft SQL Server'/>
          <SiMysql size={70} title='MySQL'/>
          <BiLogoPostgresql size={50} color='#336791' title='PostgreSQL'/>
          <SiMongodb size={50} color='#12924f' title='MongoDB'/>
          <Image 
            src="https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg"
            width={150}
            height={150}
            alt='Oracle Database'
            title='Oracle Database'
          />
        </div>
        <br />
        <div className='text-3xl font-extralight'>Projetos</div>
        <br />
        <div className="flex justify-center space-x-8">
          {portfolioItems.map((item, index) => (
            <div key={index} className="max-w-xs transform transition-transform hover:border-b-2 border-b-2 border-green-800 opacity-70 hover:opacity-100 hover:border-green-500 hover:scale-125 hover:shadow-sm ">
              <h2 className="text-xl text-slate-900 dark:text-slate-200 font-bold mb-2">{item.title}</h2>
              <p className="text-gray-700 dark:text-gray-200">{item.description}</p>
              <Link href={item.link}>
                <a className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all" target='_blank'>Ver mais</a>
              </Link>
            </div>
          ))}
        </div>
      </main>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
