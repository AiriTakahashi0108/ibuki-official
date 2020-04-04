<template>
  <div class="profileContainer">
    <div class="profile content">
      <pageTitle :title="pageTitle" :detail="pageDetail"/>
      <div>
        <h3>What's IBUKI？</h3>
        <p>
          IBUKIとは、ハードロックメタルを中心に活動しているロックボーカリスト。<br>
          小学校の頃から独学で作詞作曲アレンジを習得、2008年頃からシンガーの道を志すようになった。<br>
          また、一児の母であることを公表している。
        </p>
      </div>
      <div>
        <h3>活動歴</h3>
        <ul>
          <li><span>2008年</span>：メタルバンドCROSSVEIN初代ボーカルとして音楽活動を始める。(~2010年)</li>
          <li><span>2020年</span>：<b>Rie a.k.a Suzak</b>1st Album「Messiah」にゲストボーカルとして参加</li>
          <li><span>2021年</span>：元LIGHT BRINGERのメンバーKAZU率いる<b>Art Of Gradation</b>のボーカルとして活動</li>
          <li><span>2013年</span>：徳間ジャパンよりリリースされた<b>LOTUS KITAHARA YOSHIHIRO</b>メジャー3rd Album「Journey」にゲストボーカルとして参加</li>
          <li><span>2013</span>：ロックバンド<b>Around the Nation</b>を立ち上げる（~2016年）</li>
          <li><span>2014年</span>：ガールズメタルバンド<b>DESTROSE</b>のサポートボーカルとして活休までの全てのライブに出演
            <ul>
              <li>L.Aガンズのフィル・ルイス、ブレント・マスカット来日の際、共にツアーを回る</li>
              <li>活動休止ワンマンをSOULDさせる</li>
            </ul>
          </li>
          <li><span>2015</span>：ガールズメタルバンド<b>Disqualia</b>のオリジナルメンバーとして活動開始（~2017年）
            <ul>
              <li>実力派のガールズメタルバンドとしてデビューし、"ポストAldious"と言われ注目された</li>
              <li>Village Again Associationよりリリースされた1st Album「right NOW」かインディーズオリコン10位入り</li>
              <li>EARTHSHAKERのツアー初日オープニングアクトを務める</li>
              <li>韓国公演を成功させる</li>
            </ul>
          </li>
          <li><span>2017年</span>：<b>IBUKI</b>ソロボーカリストとして活動開始（~now）
            <ul>
              <li>1st Single「Rise!」がオリコンチャート入り</li>
              <li>2nd Single「HIGH TENSION」がオリコンチャート入り</li>
              <li>1st Album「ExMyself」に、作曲家小西貴雄、ギタリスト朝井泰生が参加</li>
            </ul>
          </li>
          <li><span>2017年</span>：総合エンターテインメントである舞台<b>魔界</b>に邪魅役として出演（~now）
            <ul>
              <li>自身が手がけた楽曲「霜月に死を賜う」がオンラインゲーム<b>信長の野望</b>の作中BGMとして起用された</li>
            </ul>
          </li>
          <li><span>2019年</span>：ガールズメタルバンド<b>FATE GEAR</b>のロンドン公演に、サポートボーカルとして出演</li>
          <li><span>2019年</span>：大村孝佳プロデュース、<b>MIYU</b>solo Aubum「WORLD MAKER」にゲストボーカルとして参加</li>

        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import PageTitle from "@/components/parts/PageTitle";

  export default {
    components: {PageTitle},
    data() {
      return {
        pageTitle: "PROFILE",
        pageDetail: "IBUKIのプロフィールや活動歴などを紹介します",
      }
    }
  }
</script>

<style scoped>
  .profileContainer {
    color: var(--basic-fontColor-dark);
  }
</style>
