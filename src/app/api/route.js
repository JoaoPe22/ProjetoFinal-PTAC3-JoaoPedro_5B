import { NextResponse } from "next/server";

export const listaDeViagens = [
  {
    lugar: "São Paulo",
    preco: 400,
    pais: "Brasil",
    tipo: "Parque Aquático",
    imagem:
      "https://passeioskids.com/wp-content/uploads/2023/09/vale-encantado-thermas-park-passeios-kids-hotel-parque-aquatico-sp.png",
    id: 1,
  },
  {
    lugar: "Bahia",
    preco: 250,
    pais: "Brasil",
    tipo: "Praia",
    imagem:
      "https://www.queroviajarmais.com/wp-content/uploads/2020/08/porto-seguro-bahia-fotos.jpg",
    id: 2,
  },

  {
    lugar: "São Paulo",
    preco: 150,
    pais: "Brasil",
    tipo: "Parque de diversão",
    imagem:
      "https://www.melhoresdestinos.com.br/wp-content/uploads/2022/04/hopi-hari-melhores-parques-brasil-820x543.jpg",
    id: 3,
  },
  {
    lugar: "Santa Catarina",
    preco: 170,
    pais: "Brasil",
    tipo: "Parque de diversão",
    imagem:
      "https://www.melhoresdestinos.com.br/wp-content/uploads/2021/05/beto-carrero-world-cupom-desconto-capa-820x431.jpeg",
    id: 4,
  },
  {
    lugar: "Wellington",
    preco: 3000,
    pais: "Nova Zelândia",
    tipo: "Ilha",
    imagem:
      "https://blog.informationplanet.com.br/wp-content/uploads/2012/05/Sul_da_Nova_Zelandia.jpg",
    id: 5,
  },
  {
    lugar: "Paris",
    preco: 10000,
    pais: "França",
    tipo: "Turismo",
    imagem:
      "https://viagemeturismo.abril.com.br/wp-content/uploads/2016/11/thinkstockphotos-4549879531.jpeg",
    id: 6,
  },
  {
    lugar: "Bora Bora",
    preco: 6500,
    pais: "Polinésia Francesa",
    tipo: "Ilha",
    imagem:
      "https://www.segurospromo.com.br/blog/wp-content/uploads/2021/03/Onde-fica-Bora-Bora.jpg",
    id: 7,
  },
  {
    lugar: "Maui",
    preco: 4000,
    pais: "Havaí",
    tipo: "Praia",
    imagem:
      "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQgrTB4xeUd96JEHVy1YWqEQo72SnRpfp06-3JaiJWvFMciOMvvrP28diG5-Ce2PQT6",
    id: 8,
  },
  {
    lugar: "Tahiti",
    preco: 4500,
    pais: "Polinésia Francesa",
    tipo: "Ilha",
    imagem:
      "https://www.bonvenontravel.com.br/assets/lua_de_mel/eb458-polinesia-francesa.jpg",
    id: 9,
  },
  {
    lugar: "Londres",
    preco: 6000,
    pais: "Reino Unido",
    tipo: "Turismo",
    imagem:
      "https://static.mundoeducacao.uol.com.br/mundoeducacao/2021/11/big-ben.jpg",
    id: 10,
  },
  {
    lugar: "Roma",
    preco: 9000,
    pais: "Itália",
    tipo: "Turismo",
    imagem:
      "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/02/passagens-aereas-roma-capa2019-01-820x430.jpg",
    id: 11,
  },
  {
    lugar: "Tóquio",
    preco: 25000,
    pais: "Japão",
    tipo: "Turismo",
    imagem:
      "https://www.vounajanela.com/wp-content/uploads/2020/01/kyoto-japao-1-600x400.jpg",
    id: 12,
  },
  {
    lugar: "Phuket",
    preco: 11000,
    pais: "Tailândia",
    tipo: "Ilha",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgQQ7t8EmTzwB23R66mgxtK12zyApWsRiz7g&s",
    id: 13,
  },
  {
    lugar: "Barcelona",
    preco: 16000,
    pais: "Espanha",
    tipo: "Turismo",
    imagem:
      "https://oquefazeremsuaviagem.com/wp-content/uploads/2017/06/o-que-fazer-barcelona.jpg",
    id: 14,
  },
  {
    lugar: "Ilhas Maldivas",
    preco: 1000,
    pais: "Maldivas",
    tipo: "Ilha",
    imagem:
      "https://thumbcdn-3.hotelurbano.net/rn3Y78i5Bolx--l_Hd9QEjJJI30=/0x380/center/middle/filters:format(webp):strip_icc():quality(80)/http://s3.amazonaws.com/legado-prod/prod/ofertas/imagens/2022/10/20/10/24/5_shutterstock_385591414.jpg",
    id: 15,
  },
  {
    lugar: "Banff",
    preco: 15000,
    pais: "Canadá",
    tipo: "Ilha",
    imagem:
      "https://cdn.audleytravel.com/3980/2847/79/1314674-banff-national-park-alberta.jpg",
    id: 16,
  },
  {
    lugar: "Santa Lúcia",
    preco: 19000,
    pais: "Caribe",
    tipo: "Ilha",
    imagem:
      "https://lalarebelo.com/wp-content/uploads/2017/02/02-St-Lucia_0185.jpg",
    id: 17,
  },
  {
    lugar: "Dubai",
    preco: 9500,
    pais: "Emirados Árabes Unidos",
    tipo: "Parque Aquático",
    imagem:
      "https://michelaguiadubai.com.br/cdn/shop/products/aquaventurewaterparkresized2_1445x.jpg?v=1648291921",
    id: 18,
  },
  {
    lugar: "Ceará",
    preco: 450,
    pais: "Brasil",
    tipo: "Parque",
    imagem:
      "https://images.focomultimidia.com/curl/motor_reserva/images/pagina_generica/cliente_1985/2021022516142671570.jpg",
    id: 19,
  },
  {
    lugar: "Rio Grande do Sul",
    preco: 780,
    pais: "Brasil",
    tipo: "Turismo",
    imagem:
      "https://magazine.zarpo.com.br/wp-content/uploads/2019/05/gramado-tudo-sobre-a-cidade-mais-charmosa-do-rio-grande-do-sul-770x500.jpg",
    id: 20,
  },
  {
    lugar: "Santa Catarina",
    preco: 525,
    pais: "Brasil",
    tipo: "Ilha",
    imagem:
      "https://res.cloudinary.com/worldpackers/image/upload/c_limit,f_auto,q_auto,w_1140/ixhfbxkepnnlibrcnfa2",
    id: 21,
  },
  {
    lugar: "Huaraz",
    preco: 4000,
    pais: "Peru",
    tipo: "Parque",
    imagem:
      "https://content.r9cdn.net/rimg/dimg/17/1d/38963bbb-city-58607-173326d42bf.jpg?crop=true&width=1020&height=498",
    id: 22,
  },
  {
    lugar: "Isla Mujeres",
    preco: 4800,
    pais: "México",
    tipo: "Ilha",
    imagem:
      "https://www.islandlifemexico.com/wp-content/uploads/2020/12/isla-mujeres-guide-square-1.jpg",
    id: 23,
  },
  {
    lugar: "Madeira",
    preco: 6000,
    pais: "Portugal",
    tipo: "Turismo",
    imagem:
      "https://www.cvc.com.br/dicas-de-viagem/wp-content/uploads/2019/10/madeira-portugal-marina-da-quinta-grande-shutterstock-522001627.jpg",
    id: 24,
  },
  {
    lugar: "Florença",
    preco: 4000,
    pais: "Itália",
    tipo: "Turismo",
    imagem:
      "https://www.carpemundi.com.br/wp-content/uploads/2018/01/o-que-fazer-floren%C3%A7a.jpg",
    id: 25,
  },
  {
    lugar: "Cusco",
    preco: 5700,
    pais: "Peru",
    tipo: "Turismo",
    imagem:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/14/db/41/caption.jpg?w=1200&h=-1&s=1",
    id: 26,
  },
  {
    lugar: "Nova York",
    preco: 5470,
    pais: "EUA",
    tipo: "Turismo",
    imagem: "https://vivaomundo.com.br/wp-content/uploads/2014/03/NYC-1.jpg",
    id: 27,
  },
  {
    lugar: "Cidade do Cabo",
    preco: 4787,
    pais: "África do Sul",
    tipo: "Turismo",
    imagem:
      "https://www.segurospromo.com.br/blog/wp-content/uploads/2020/09/cidade-do-cabo-750x360.jpg",
    id: 28,
  },
  {
    lugar: "Sydney",
    preco: 8185,
    pais: "Austrália",
    tipo: "Turismo",
    imagem: "https://vivaomundo.com.br/wp-content/uploads/2018/06/SYDNEY.jpg",
    id: 29,
  },
  {
    lugar: "Rio de Janeiro",
    preco: 5980,
    pais: "Brasil",
    tipo: "Turismo",
    imagem: "https://vivaomundo.com.br/wp-content/uploads/2018/06/RIO.jpg",
    id: 30,
  },
  {
    lugar: "Amsterdã",
    preco: 5581,
    pais: "Holanda",
    tipo: "Turismo",
    imagem:
      "https://vivaomundo.com.br/wp-content/uploads/2018/06/AMSTERDAM.jpg",
    id: 31,
  },
  {
    lugar: "Hong Kong",
    preco: 18650,
    pais: "China",
    tipo: "Turismo",
    imagem:
      "https://vivaomundo.com.br/wp-content/uploads/2018/06/HONG-KONG.jpg",
    id: 32,
  },
  {
    lugar: "Cairo",
    preco: 26500,
    pais: "Egito",
    tipo: "Turismo",
    imagem: "https://vivaomundo.com.br/wp-content/uploads/2018/06/EGITO.jpg",
    id: 33,
  },
  {
    lugar: "Ilhas Virgens Britânicas",
    preco: 24510,
    pais: "Caribe",
    tipo: "Ilha",
    imagem: "https://vivaomundo.com.br/wp-content/uploads/2014/08/BVIS-1.jpg",
    id: 34,
  },
  {
    lugar: "Bali",
    preco: 15000,
    pais: "Indonésia",
    tipo: "Ilha",
    imagem:
      "https://vivaomundo.com.br/wp-content/uploads/2018/10/BaliVivaoMundo.jpg",
    id: 35,
  },
  {
    lugar: "São Francisco",
    preco: 5489,
    pais: "Califórnia",
    tipo: "Turismo",
    imagem:
      "https://vivaomundo.com.br/wp-content/uploads/2018/06/SAO-FRANCISCO.jpg",
    id: 36,
  },
  {
    lugar: "Patagônia",
    preco: 5489,
    pais: "Argentina",
    tipo: "Turismo",
    imagem: "https://vivaomundo.com.br/wp-content/uploads/2018/06/FTIZROY.jpg",
    id: 37,
  },
  {
    lugar: "Serra Gaúcha",
    preco: 5482,
    pais: "Brasil",
    tipo: "Turismo",
    imagem:
      "https://guiaviajarmelhor.com.br/wp-content/uploads/2015/07/bondinho.jpg",
    id: 38,
  },
  {
    lugar: "São Luís",
    preco: 4589,
    pais: "Brasil",
    tipo: "Praia",
    imagem:
      "https://www.visitbrasil.com/wp-content/uploads/2021/08/Visit-Brazil-Sao-Luis-MA-Praia-e-Sol-7.jpg",
    id: 39,
  },
  {
    lugar: "Recife",
    preco: 4214,
    pais: "Brasil",
    tipo: "Praia",
    imagem:
      "https://billete996.aireuropa.com/wp-content/uploads/2018/08/Brazil_FB-1170x630.png",
    id: 40,
  },
  {
    lugar: "Recife",
    preco: 4214,
    pais: "Brasil",
    tipo: "Praia",
    imagem:
      "https://billete996.aireuropa.com/wp-content/uploads/2018/08/Brazil_FB-1170x630.png",
    id: 41,
  },
  {
    lugar: "Recife",
    preco: 4214,
    pais: "Brasil",
    tipo: "Praia",
    imagem:
      "https://billete996.aireuropa.com/wp-content/uploads/2018/08/Brazil_FB-1170x630.png",
    id: 42,
  },
];

export async function GET() {
  return NextResponse.json(listaDeViagens);
}