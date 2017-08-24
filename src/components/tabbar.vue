<template>
  <div class="tabbarWrap">
    <ul>
      <Tabbaritem bottxt="首页" mark="home" :xuan="selected" @change="getval">
        <img src="../assets/images/ic_tab_home_normal.png" slot="normalimg">
        <img src="../assets/images/ic_tab_home_active.png" slot="acimg">
      </Tabbaritem>
      <Tabbaritem bottxt="书影音" mark="audio" :xuan="selected" @change="getval">
        <img src="../assets/images/ic_tab_subject_normal.png" slot="normalimg">
        <img src="../assets/images/ic_tab_subject_active.png" slot="acimg">
      </Tabbaritem>
      <Tabbaritem bottxt="广播" mark="broadcast" :xuan="selected" @change="getval">
        <img src="../assets/images/ic_tab_status_normal.png" slot="normalimg">
        <img src="../assets/images/ic_tab_status_active.png" slot="acimg">
      </Tabbaritem>
      <Tabbaritem bottxt="小组" mark="group" :xuan="selected" @change="getval">
        <img src="../assets/images/ic_tab_group_normal.png" slot="normalimg">
        <img src="../assets/images/ic_tab_group_active.png" slot="acimg">
      </Tabbaritem>
      <Tabbaritem bottxt="我的" mark="mine" :xuan="selected" @change="getval">
        <img src="../assets/images/ic_tab_profile_female_normal.png" slot="normalimg">
        <img src="../assets/images/ic_tab_profile_female_active.png" slot="acimg">
      </Tabbaritem>
    </ul>
  </div>
</template>
<script>
  import Tabbaritem from "./tabbaritem"
  export default{
    components:{
      Tabbaritem
    },
    data:function(){
      return{
        selected:"home"//用来router跳转

      }
    },
    methods:{
      getval:function(val){
        this.selected=val;
      }
    }
  }
</script>
<style>
  .tabbarWrap{width: 100%;background: #FDFBFC;position: fixed;bottom: 0;border-top: 1px solid #DCD6D6;z-index: 10}
</style>

