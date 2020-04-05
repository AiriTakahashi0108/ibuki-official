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
          <input id="mailVerification" name="mailVerification" v-model="mailVerification">
          <label for="about">お問い合わせ項目：</label>
          <select name="about" id="about" v-model="matter" :value="matter">
            <option disabled value="">選択してください</option>
            <option v-for="item in selectOption" :value="item">{{item}}</option>
          </select>

          <label for="comment">お問い合わせ内容：</label>
          <textarea
            v-model="comment"
            id="comment"
            name="comment"
            placeholder="お問い合わせ内容を記入してください" 　
          />
          <p>{{form}}</p>
          <p>{{errorMessage}}</p>

          <button @click.prevent="formCheck">確認画面へ</button>
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

        <button @click="formChange(0)">戻る</button>
        <button @click="formChange(1)">送信する</button>
      </section>

      <!--送信完了-->
      <section v-if="formStatus === 2">
        <p>お問い合わせありがとうございました、返答お待ちください。</p>
        <p>※返信には数日かかる場合もございます</p>

        <button @click="formChange(0)">入力画面へ戻る</button>
      </section>
    </div>
  </div>
</template>

<script>
  import _ from 'lodash'
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
        selectOption: [
          '出演依頼',
          'レコーディング依頼',
          'ボイストレーニングについて',
          'ファンメッセージ',
          'その他',
        ],
        errorMessage: {
          name: '',
          mail: '',
          mailVerification: '',
          matter: '',
          comment: '',
        },
        errorFlag: '',
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
      matter: {
        get() {
          return this.form.matter
        },
        set(matter) {
          this.actionUpdateForm({matter})
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
      formChange(num) {
        this.formStatus = num
      },
      formCheck() {
        _.forIn(this.errorMessage, (value, key, object)=> {
          object[key] = ''
        })
        this.errorFlag = ''
        const isMail = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;


        if(!this.name) {
          this.errorMessage.name = '名前を入力してください'
          this.errorFlag = true
        }
        if(!this.mail) {
          this.errorMessage.mail = 'メールアドレスを入力してください'
          this.errorFlag = true
        } else if(!isMail.test(this.mail)) {
          this.errorMessage.mail = '正しいメールアドレスを入力してください'
          this.errorFlag = true
        }
        if(!this.mailVerification) {
          this.errorMessage.mailVerification = '確認用メールアドレスを入力してください'
          this.errorFlag = true
        } else if(this.mail !== this.mailVerification) {
          this.errorMessage.mailVerification = '同じメールアドレスを入力してください'
          this.errorFlag = true
        }
        if(!this.matter) {
          this.errorMessage.matter = 'お問い合わせ項目を選択してください'
          this.errorFlag = true
        }
        if(!this.comment) {
          this.errorMessage.comment = 'お問い合わせ内容を選択してください'
          this.errorFlag = true
        }

        if(!this.errorFlag) {
          this.formChange(1)
        } else {
          return
        }
      }
    },
  }
</script>

<style>
  .profileContainer {
    color: var(--basic-fontColor-dark);
  }
</style>
