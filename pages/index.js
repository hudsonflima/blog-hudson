import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';
import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import { SiMicrosoftsqlserver, SiMysql, SiMongodb, SiHtml5, SiCss3, SiDotnet, SiReact, SiTailwindcss, SiOracle } from 'react-icons/si'
import { BiLogoPostgresql, BiLogoJavascript } from 'react-icons/bi'
import { FcGoogle } from 'react-icons/fc'
import { FaNode } from 'react-icons/fa'
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
        <div className="text-3xl font-extralight sm:mt-8 md:mt-12 lg:mt-16">
          Expertise nas tecnologias
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4 sm:mt-8 md:mt-12 lg:mt-16">
          {/* Ícones de tecnologia */}
          <FaNode size={50} color='lightgreen' title='Node.js' className=' transform transition-transform hover:scale-150 duration-700 '/>
          <BiLogoJavascript size={50} color='yellow' title='Javascript' className=' transform transition-transform hover:scale-150 duration-700 '/>
          <SiHtml5 size={50} color='#EF652A' title='HTML5' className=' transform transition-transform hover:scale-150 duration-700 '/>
          <SiCss3 size={50} color='#2965f1' title='CSS3' className=' transform transition-transform hover:scale-150 duration-700 '/>
          <SiReact size={50} color='#2ff9ff' title='React.js' className=' transform transition-transform hover:scale-150 duration-700 '/>
          <SiDotnet size={50} color='gray' title='Microsoft .NET' className=' transform transition-transform hover:scale-150 duration-700 '/>
          <SiTailwindcss size={50} color='cyan' title='Tailwind CSS' className=' transform transition-transform hover:scale-150 duration-700 '/>
          <FcGoogle size={50} title='Google Suite' className=' transform transition-transform hover:scale-150 duration-700 '/>
        </div>

        <div className="text-3xl font-extralight sm:mt-8 md:mt-12 lg:mt-16">
          Integrações
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4 sm:mt-8 md:mt-12 lg:mt-16">
          {/* Ícones de integração */}
          <SiMicrosoftsqlserver size={50} color='' title='Microsoft SQL Server' className=' transform transition-transform hover:scale-150 duration-700'/>
          <SiMysql size={70} title='MySQL' className=' transform transition-transform hover:scale-150 duration-700' />
          <BiLogoPostgresql size={50} color='#336791' title='PostgreSQL' className=' transform transition-transform hover:scale-150 duration-700'/>
          <SiMongodb size={50} color='#12924f' title='MongoDB' className=' transform transition-transform hover:scale-150 duration-700'/>
          <SiOracle size={50} color='#E32124' title='Oracle Database' className=' transform transition-transform hover:scale-150 duration-700'/>
        </div>
        <br />
        <div className="text-3xl font-extralight sm:mt-8 md:mt-12 lg:mt-16">
          Projetos
        </div>
        <br />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-4 sm:mt-8 md:mt-12 lg:mt-16 xs:p-10">
          {portfolioItems.map((item, index) => (
            <div key={index} className="max-w-xs transform transition-transform hover:border-b-2 border-b-2 border-green-800 opacity-70 hover:opacity-100 hover:border-green-500 hover:scale-125 hover:shadow-sm duration-700">
              <h2 className="text-xl text-slate-900 dark:text-slate-200 font-bold mb-2">{item.title}</h2>
              <p className="text-gray-700 dark:text-gray-200 ">{item.description}</p>
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
