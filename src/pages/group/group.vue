<template>
  <div class="groupWrap">
    <div class="grouptop">
      <MyHeader txt="小组">
        <img src="../../assets/images/ic_group_search.png" class="leftImg" slot="leftImg">
        <img src="../../assets/images/ic_chat_green.png" class="rightImg" slot="rightImg">
      </MyHeader>
    </div>
    <GroupBanner groupnum="418832">
      <img src="../../assets/images/ic_rec_group_banner_6.png" slot="commendImg">
    </GroupBanner>
    <ChoiceArea>

    </ChoiceArea>
  </div>
</template>
<script>
  import MyHeader from "../../components/header"
  import GroupBanner from "./groupbanner"
  import ChoiceArea from "./choicearea"
  export default {
    components:{
      MyHeader,
      GroupBanner,
      ChoiceArea
    }
  }
</script>
<style>
  .grouptop{height: 48px;}
</style>
