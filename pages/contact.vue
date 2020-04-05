<template>
  <div class="profileContainer">
    <div class="profile content">
      <pageTitle :title="pageTitle" :detail="pageDetail"/>

      <!--入力画面-->
      <section v-if="formStatus === 0">
        <form>
          <label for="name">名前：</label><input id="name" type="text" name="name" v-model="name">
          <label for="mail">メールアドレス：</label><input id="mail" type="text" name="mail" v-model="mail">
          <label for="mailVerification">メールアドレス（確認用）：</label>
          <input id="mailVerification" type="email" name="mailVerification">
          <label for="about">項目：</label>
          <select name="about" id="about" v-model="selected">
            <option disabled value="">選択してください</option>
            <option v-for="item in form.selectOption">{{item}}</option>
          </select>

          <label for="comment">お問い合わせ内容：</label>
          <textarea
            v-model="comment"
            id="comment"
            name="comment"
            placeholder="お問い合わせ内容を記入してください" 　
          />
          <p>{{form}}</p>

          <button @click="formCheck(1)">確認画面へ</button>
        </form>
      </section>

      <!--確認画面-->
      <section v-if="formStatus === 1">
        <p>お問い合わせ内容はこちらでよろしいですか？</p>

        <div>
          <p><span>名前：</span><span>{{form.name}}</span></p>
          <p><span>メールアドレス：</span><span>{{form.mail}}</span></p>
          <p><span>項目：</span><span>{{form.selected}}</span></p>
          <div>
            <span>お問い合わせ内容：</span>
            <p>{{form.comment}}</p>
          </div>
        </div>

        <button @click="formCheck(0)">戻る</button>
        <button @click="formCheck(1)">送信する</button>
      </section>

      <!--送信完了-->
      <section v-if="formStatus === 2">
        <p>お問い合わせありがとうございました、返答お待ちください。</p>
        <p>※返信には数日かかる場合もございます</p>

        <button @click="formCheck(0)">入力画面へ戻る</button>
      </section>
    </div>
  </div>
</template>

<script>
  import PageTitle from "@/components/parts/PageTitle";
  import {mapGetters, mapActions} from 'vuex';

  export default {
    components: {PageTitle},
    data() {
      return {
        pageTitle: "CONTACT",
        pageDetail: "ファンメッセージ・出演依頼などお気軽にどうぞ",
        formStatus: 0,
        mailVerification: '',
      }
    },
    computed: {
      ...mapGetters({
        form: 'contact/form',
      }),
      name: {
        get() {
          return this.form.name
        },
        set(name) {
          this.actionUpdateForm({name})
        }
      },
      mail: {
        get() {
          return this.form.mail
        },
        set(mail) {
          this.actionUpdateForm({mail})
        }
      },
      selected: {
        get() {
          return this.form.selected
        },
        set(selected) {
          this.actionUpdateForm({selected})
        }
      },
      comment: {
        get() {
          return this.form.comment
        },
        set(comment) {
          this.actionUpdateForm({comment})
        }
      }
    },
    methods: {
      ...mapActions({
        actionUpdateForm: 'contact/actionUpdateForm',
      }),
      formCheck(num) {
        this.formStatus = num
      }
    },
  }
</script>

<style>
  .profileContainer {
    color: var(--basic-fontColor-dark);
  }
</style>
