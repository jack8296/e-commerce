import { useState, type JSX } from "react";
//components
import Header from "../../components/header/header.component";
import Sidebar from "../../components/sidebar/sidebar";
//utilities
import clsx from "clsx";

const Dashboardpage = (): JSX.Element => {
  const [toggleSidebar, setToggleSidebar] = useState<boolean>(false);
  const activeToggleClass = toggleSidebar ? "active" : "";
  const combineClass = clsx("main-page-content", activeToggleClass);
  return (
    <div className="dashboard-page">
      <Header />
      <div className={combineClass}>
        <Sidebar
          setToggleSidebar={setToggleSidebar}
          toggleSidebar={toggleSidebar}
        />
        <div className="page-main">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex aperiam
          aliquam ratione magnam error minus! Nobis obcaecati aut aperiam
          debitis dolores, est autem, quas corporis harum officiis consequuntur
          omnis possimus nisi, nihil delectus excepturi quasi! Deserunt, labore,
          animi reiciendis dicta cupiditate reprehenderit consectetur amet, nemo
          ipsa aut veritatis ea? Consequatur, corrupti atque. Sed quos animi
          blanditiis repellat, inventore asperiores ratione doloremque velit
          modi! Libero maxime, rem dignissimos et placeat repellendus, earum
          quos temporibus suscipit quae neque tempore nesciunt dolorum
          recusandae provident modi nulla. Labore rem, nostrum fugit inventore
          consequatur maxime minima ab iusto temporibus facilis vitae.
          Voluptatibus enim quidem explicabo aspernatur reprehenderit quos,
          voluptatem, rem, quas harum ea soluta incidunt quaerat est quo.
          Exercitationem aperiam saepe tempora cum, at error illum, dicta soluta
          sequi debitis quisquam alias est eligendi quas deleniti ipsa? Culpa ea
          necessitatibus ab earum voluptate odio dignissimos veritatis nam
          itaque animi rem iure autem obcaecati non molestias dolorem
          consequatur, ad totam enim eaque aperiam iste quaerat alias?
          Repellendus commodi sequi exercitationem voluptatem, animi vel nulla
          ratione dolorem eligendi eos architecto ad corrupti adipisci nihil
          consectetur provident, rem odit ipsum, iure mollitia veritatis sit
          quod? Vero, itaque inventore laborum ea sit exercitationem assumenda
          modi laboriosam. Dignissimos sunt quia aliquam blanditiis maiores
          soluta provident eos animi est. Excepturi quasi asperiores
          perspiciatis perferendis voluptatibus eius laboriosam dolorum nisi
          inventore dolore adipisci aspernatur tenetur eligendi deleniti nihil
          similique culpa commodi quidem, possimus dicta voluptatem. Voluptate
          unde veritatis repellat vero aspernatur fuga temporibus quas
          blanditiis! Iure doloribus maiores voluptates inventore quia commodi,
          eligendi ab molestias, in, numquam laboriosam beatae porro id ea? Hic
          quisquam repudiandae id odit minus molestias quo repellendus ratione,
          incidunt commodi distinctio reprehenderit aut enim minima rem tempora
          reiciendis aspernatur explicabo? Porro at consequuntur harum!
          Consequatur reiciendis minus in, mollitia quod ex odio sequi officiis
          quam, est ullam soluta eos labore voluptatibus commodi, impedit
          ratione qui? Blanditiis veritatis omnis eos? Veritatis eos laboriosam
          culpa mollitia tenetur repellat, reiciendis amet ducimus non iste
          perspiciatis neque architecto adipisci nesciunt facilis alias quasi
          quia expedita fuga nam vel nobis minus assumenda. Voluptates, debitis
          neque! Cupiditate facilis hic illum vel eligendi laboriosam totam!
          Quibusdam aspernatur veniam dolores sunt qui, sapiente velit nostrum
          hic quo tenetur inventore corporis voluptas adipisci officiis saepe
          animi recusandae quasi maiores officia aliquam error tempore ex! Ab,
          molestiae. Unde, sint. Laborum distinctio doloremque accusantium nobis
          officiis voluptate enim vel, architecto asperiores consequatur rerum
          quasi, maiores eligendi tempora deserunt quis! Ducimus aspernatur
          inventore pariatur illum hic. Nulla repellendus sed eum sit modi at
          magnam eius quia placeat autem? Est possimus harum, eveniet
          voluptates, aperiam ad quia modi voluptatibus delectus id sunt rerum
          inventore facilis? Ea rerum deleniti quidem sint exercitationem modi
          delectus voluptatem inventore illum accusamus, eos saepe vel aliquam,
          suscipit autem ullam quia? Accusantium exercitationem numquam error
          temporibus, eius provident iure nihil in eligendi esse perspiciatis ut
          rem earum ipsa rerum harum libero sed sint autem quos sequi ea nam.
          Cumque ratione dolore veniam, quisquam amet nobis quo nihil reiciendis
          debitis praesentium nostrum, voluptates optio nam soluta obcaecati a
          quia dolorem nisi consectetur labore! Consequuntur doloribus deserunt,
          molestias vel earum illo dolorem? Id ipsum doloribus mollitia
          voluptatibus voluptas ratione hic. Dolores, adipisci fuga! Aliquam
          quis repellat cupiditate repudiandae magni nostrum. Sunt eius
          molestiae impedit quod facilis, ad, adipisci autem iste repellat natus
          atque sit doloremque, dicta debitis sequi cumque placeat tempora
          corporis dolorem eveniet error ex ducimus architecto in. Optio facere
          unde beatae laboriosam quidem, doloribus alias aperiam ullam enim
          voluptatem suscipit, laudantium asperiores! Sint laudantium harum
          minus expedita, similique autem eveniet accusamus nesciunt ipsum nisi
          vitae, suscipit molestiae, quasi necessitatibus asperiores nobis fugit
          quis hic nostrum doloribus dignissimos corrupti. Accusantium sint
          eveniet quae similique aut veritatis numquam, dolore hic placeat
          consequatur ad! Vel quod repellat in inventore natus ad, molestias
          quaerat tempora aut ullam ipsum asperiores laboriosam illo, illum
          voluptatum officia nulla architecto animi, eveniet ducimus
          praesentium. Quo recusandae, dolorum eligendi adipisci ut perspiciatis
          dolor voluptatibus minus perferendis doloribus velit qui facilis ex
          excepturi eaque porro. Eius, id laboriosam nam placeat fuga, magni
          dicta minus sequi at eligendi ratione qui tenetur. Quae placeat quod
          itaque magnam maxime nesciunt. Esse quasi nemo vero velit neque
          repellendus sint facere alias eum autem labore, sapiente commodi ad
          quia aliquam quae, repudiandae ipsum minus dolore incidunt. Modi
          temporibus omnis id illum facere, iste doloremque voluptatum corporis
          excepturi quis cum facilis, voluptatibus, sapiente blanditiis maxime
          qui nostrum autem cupiditate itaque eaque perspiciatis natus iure
          sunt. Officiis labore ad neque iste fuga rem, saepe dolor, dolorum
          nulla nesciunt facilis corrupti et quis exercitationem. Dolorum
          suscipit atque assumenda porro expedita enim, quae quas sequi nemo
          repellat eveniet, cumque libero earum ducimus illum veniam, ab
          eligendi. Voluptatibus quod totam facere praesentium possimus ullam
          velit neque aliquid, illo doloribus error eligendi adipisci quisquam
          iure animi, porro incidunt aperiam officia, ipsam maxime. Hic autem
          sint quidem est laboriosam placeat, eum cum, soluta laudantium minima
          similique consequuntur dolores facilis quia quo ducimus iste nulla
          quasi atque eligendi pariatur sapiente? Sint corrupti voluptas illum!
          Sit quae et obcaecati ex perspiciatis quis consequuntur laborum,
          inventore quas similique exercitationem error cum animi distinctio
          velit id ducimus commodi provident. Nemo tempore minus incidunt natus,
          similique obcaecati veritatis, id dolor fuga laudantium quidem
          perspiciatis impedit eveniet explicabo nam quos. Maxime modi vero odio
          sint repellat molestias dolor nemo possimus est vitae facere, alias
          provident dignissimos itaque placeat repellendus consequuntur, ullam
          tempore, iusto laborum harum. Odit laudantium modi, facere impedit
          accusamus voluptates veritatis voluptatum expedita placeat beatae fuga
          consectetur dignissimos excepturi tempora rem animi repudiandae
          cumque, distinctio blanditiis quasi saepe doloremque commodi hic
          fugiat? Numquam voluptas quos hic suscipit delectus eum nulla, non
          eligendi eveniet illo cumque optio harum omnis aliquam expedita
          placeat dolore incidunt quam voluptate quidem reprehenderit ipsam,
          facilis et provident! Laboriosam, vel optio. Officiis amet, rem
          corrupti harum ex facere autem architecto, sit delectus culpa totam,
          dolore at quaerat neque perspiciatis. Sint amet distinctio sunt
          repellat natus, enim dolorem nam blanditiis aliquid ullam dicta ipsam
          labore error repellendus quas assumenda commodi molestias nemo
          exercitationem! Exercitationem dicta doloremque beatae libero quas
          fugiat nihil similique, tempora vitae quidem, eveniet dignissimos
          atque magnam voluptatem repudiandae obcaecati eos, sapiente corrupti?
          Porro necessitatibus nobis praesentium tempore iste cum veniam labore,
          beatae perferendis eum natus sequi animi? Tempora ut corporis est,
          ipsa hic recusandae temporibus nam magnam provident facere quasi
          nihil, perferendis ducimus debitis nulla! Recusandae ab perspiciatis,
          voluptate fuga vel earum aliquid a nemo cum magnam soluta, veniam
          mollitia non, consequuntur commodi voluptas quam. Vero velit dicta
          aspernatur perspiciatis dolore similique nesciunt eos possimus
          voluptate! Aperiam modi, perferendis eligendi eveniet, esse inventore
          vitae reiciendis sapiente repudiandae consequuntur quidem dignissimos
          corporis sequi! Commodi, saepe nemo perspiciatis fugit omnis nostrum
          atque dolor. Repellat aperiam nostrum, illo debitis in aut incidunt
          ducimus expedita laudantium et excepturi iste quia non. Deserunt nulla
          veniam provident aperiam exercitationem dignissimos officiis autem
          error fugit eos ipsam cum voluptates libero nostrum temporibus
          laboriosam quod beatae nam quaerat saepe harum, corrupti a. Ducimus,
          suscipit eaque nesciunt id blanditiis excepturi inventore fuga ab
          nobis, quae modi odio laboriosam laudantium harum officia aliquid
          temporibus necessitatibus saepe enim! Autem dicta ullam est, nemo
          vitae, veniam a consequuntur, dolores rem quae saepe necessitatibus
          ipsam consectetur commodi perspiciatis ipsa reiciendis corrupti
          repudiandae suscipit! Distinctio facere vitae doloremque dignissimos
          obcaecati doloribus dolores voluptatum id ipsum dicta possimus
          incidunt, nostrum provident voluptatem iste quidem enim labore laborum
          praesentium modi saepe! Assumenda nesciunt cumque, officiis
          cupiditate, quisquam ab numquam eum ea, dolores neque at unde maiores
          rem vel autem labore necessitatibus dolorem dolor! Ut expedita nemo
          ipsam corporis laborum magnam natus ratione cum debitis. Neque
          molestias excepturi voluptatum ex enim quis aliquid voluptate
          distinctio ab tempore. Autem dignissimos aperiam tenetur voluptates
          nisi, officia possimus distinctio omnis asperiores est, eius eligendi
          vero! Iure et hic ducimus dolore dolor veniam quia quidem eos
          repellendus cum voluptatem veritatis illum excepturi incidunt, cumque
          nesciunt laborum ullam illo molestiae dicta minima iusto. Distinctio
          illo adipisci modi qui dignissimos, ipsam molestias laboriosam veniam
          tempore ad eius voluptate nulla voluptas. Vitae deserunt repellendus
          quia dolorem optio vel obcaecati, tempora in beatae repellat natus
          nemo. Corrupti explicabo numquam blanditiis cupiditate, odio nulla.
          Modi vero cum nobis molestias! Molestiae, suscipit quam distinctio vel
          libero at impedit, totam maxime laboriosam vero explicabo architecto
          error ex quasi commodi, nostrum id velit fugiat quidem adipisci!
          Aspernatur adipisci natus quisquam architecto in iure dolor atque quia
          ratione, corporis id neque laudantium quod quibusdam officiis libero
          ullam temporibus. Voluptatum excepturi, laudantium doloribus autem
          debitis id placeat deserunt ratione magni, eius quasi vitae nulla
          assumenda quos obcaecati eum aperiam quo numquam minus optio fugit
          error. Fuga nisi assumenda enim sit impedit officiis veniam? Soluta,
          voluptatum voluptate iure culpa, qui quod dolorum quis magni hic ipsum
          laboriosam, reiciendis aspernatur saepe alias. Sapiente velit ipsa rem
          consequatur accusantium, vitae voluptas qui officiis quam sint dolor
          animi tempora atque repellat veniam excepturi fugit hic inventore
          obcaecati asperiores dolores est alias? Repudiandae obcaecati mollitia
          similique temporibus a facere, illum totam tempore earum libero ipsum.
          Dignissimos possimus eligendi provident accusamus similique facilis
          odit, ad, reiciendis magni totam, minima molestias amet qui
          consequatur maxime repellendus repudiandae! Delectus aliquam voluptate
          suscipit saepe ex amet hic, illo minus tempore accusamus, dolores
          nostrum dolorum impedit distinctio dolorem provident inventore
          eligendi voluptatem. Quam explicabo amet mollitia, deserunt recusandae
          sequi. Earum dolor tempora officiis amet rerum eius nihil placeat et
          cupiditate autem. Quis repellat mollitia ex officiis totam nostrum
          doloribus consequuntur corporis. Aperiam voluptatem et reiciendis ipsa
          vel, officia tempora repellendus numquam perferendis non esse voluptas
          ea repellat officiis, dolorum, at quibusdam. Aliquam dolores, ullam
          asperiores et atque facilis quod aliquid necessitatibus totam at
          aperiam accusantium earum accusamus, dicta, ratione illum corrupti
          nisi. Dicta eveniet magnam adipisci. Soluta earum esse assumenda
          dignissimos sunt eveniet excepturi fugiat culpa, cum numquam unde rem
          veritatis voluptatibus ipsa accusamus omnis incidunt placeat in!
          Cumque provident eaque dolor? Praesentium minima enim aperiam
          quisquam. Expedita dicta est ut eveniet, autem sed aut consectetur,
          modi distinctio voluptates id dignissimos quasi! Pariatur, eius quo?
          Voluptatibus deleniti perspiciatis velit alias quasi corrupti debitis
          iste temporibus accusamus tempora mollitia, quia molestiae quos, sequi
          doloremque quidem nihil ducimus. Nam suscipit iusto maxime voluptatum,
          facere porro iste officiis tenetur soluta consectetur dolorum? Nobis,
          id ipsam odit unde voluptatem adipisci asperiores alias, magnam
          officiis delectus quia tenetur, et rerum deleniti provident nam
          voluptates obcaecati beatae ab accusamus. Assumenda dignissimos in
          perferendis, molestias quis reprehenderit, saepe nobis autem quia
          dicta sequi praesentium mollitia, vitae nam ab? Autem maiores nisi
          ratione iure odit recusandae modi mollitia, repellat deleniti sunt
          voluptate rem ducimus eveniet quod ab ipsam minus repudiandae aliquid
          pariatur cum repellendus. Quas commodi provident magni magnam
          assumenda nam libero placeat doloribus, maxime iure qui dicta vel
          nulla nobis molestiae facilis harum necessitatibus sapiente eligendi
          modi ad eaque quibusdam. Nostrum pariatur quis amet sunt totam
          deleniti praesentium, ea voluptas reprehenderit dolorem nobis dolorum
          itaque dolores aliquid inventore distinctio illum magnam laudantium
          rerum veritatis. Excepturi aperiam nisi et. Neque eveniet minima
          libero. Quam saepe provident quo pariatur sit autem tenetur. Maxime
          laudantium doloribus cupiditate labore quod? Exercitationem, facere
          iusto labore ipsum atque porro temporibus dolor cum corporis, dolores
          modi maiores magnam earum eum voluptatum soluta corrupti minima
          repellendus eos eaque quibusdam quis ullam. Adipisci perferendis
          officiis quam voluptates animi aperiam quos expedita officia qui
          inventore! Nesciunt laudantium amet reiciendis eveniet eos qui,
          temporibus maxime nostrum commodi cumque ipsam, dolorum quo obcaecati
          nam beatae enim repellat recusandae vitae quam omnis? Voluptates eos
          ipsa cumque. Soluta cum repellat asperiores, odit illo, aspernatur ex
          architecto provident repudiandae saepe molestiae neque reiciendis,
          quidem debitis blanditiis iste libero eius ipsum vel dicta sint autem
          delectus praesentium. Ab nulla hic animi tempora harum odit. Vel
          corporis placeat atque quibusdam dolore facere harum nisi odit sed
          dolor temporibus animi deleniti accusamus unde officia cum voluptatum,
          sunt quasi, ex perspiciatis blanditiis recusandae incidunt. Iure
          repudiandae amet sequi quas modi ratione deleniti, ab pariatur,
          consequatur quam possimus, nulla voluptate consequuntur asperiores.
          Consequuntur facere earum aliquam tenetur sit eveniet similique,
          soluta blanditiis qui enim possimus placeat non molestias ipsa
          reprehenderit officiis et, repudiandae eligendi amet hic! Unde
          architecto blanditiis odio optio consequuntur voluptatibus? Officia,
          cum nihil?
        </div>
      </div>
    </div>
  );
};

export default Dashboardpage;
