<template>
  <div class="pt-[4vw] pl-[4vw] bg-[#eef0f5]">
    <!-- title -->
    <div class="h-[6vw] flex items-center justify-between">
      <Icon icon="uiw:left" />
      <span>排行榜</span>
      <div class="w-[37px]"></div>
    </div>
    <!-- 内容 -->
    <van-tabs v-model:active="active">
      <van-tab title="官方">
        <!-- 榜单推荐 -->
        <div class="mt-[6vw] pr-[4vw] box-border">
          <h3 class="font-[800]">榜单推荐</h3>
          <div class="flex items-center bg justify-between mt-[4vw]">
            <div
              class="w-[29vw] h-[29vw] rounded-[8px] flex items-center justify-center text-[#fff] relative"
            >
              <img :src="defaultKey?.[38].coverImgUrl" class="" alt="" />
              <Icon
                icon="ph:play-fill"
                style="color: white"
                class="absolute bottom-[2vw] right-[3vw] text-[5vw]"
              />
            </div>
            <div
              class="w-[29vw] h-[29vw] rounded-[8px] bg-red-700 flex items-center justify-center text-[#fff] relative"
            >
              <img :src="defaultKey?.[50].coverImgUrl" alt="" />
              <Icon
                icon="ph:play-fill"
                style="color: white"
                class="absolute bottom-[2vw] right-[3vw] text-[5vw]"
              />
            </div>
            <div
              class="w-[29vw] h-[29vw] rounded-[8px] bg-red-700 flex items-center justify-center text-[#fff] relative"
            >
              <img :src="defaultKey?.[25].coverImgUrl" alt="" />
              <Icon
                icon="ph:play-fill"
                style="color: white"
                class="absolute bottom-[2vw] right-[3vw] text-[5vw]"
              />
            </div>
          </div>
        </div>
        <!-- 官方榜 -->
        <div class="mt-[6vw] pr-[4vw] box-border">
          <h3 class="font-[800]">官方榜</h3>
          <div
            class="flex flex-col justify-center items-center"
            v-for="item in getrangking"
            :key="item.id"
          >
            <div
              class="w-[91vw] rounded-[8px] my-[3vw] py-[4vw] pl-[5vw] pr-[2vw] bg-white"
            >
              <!-- title -->
              <div class="flex justify-between">
                <div>
                  <h3 class="font-[800]">
                    {{ item?.uiElement.mainTitle.title }}
                  </h3>
                </div>
                <div>
                  <span class="text-[#999ad7] text-[3vw]">{{
                    item?.creativeExtInfoVO.updateFrequency
                  }}</span>
                </div>
              </div>
              <!-- 列表 -->
              <div class="flex mt-[4vw] justify-between">
                <div class="flex items-center w-[29vw] justify-center">
                  <img
                    :src="item?.resources[0].uiElement.image.imageUrl"
                    class="w-[17vw] h-[17vw]"
                    alt=""
                  />
                </div>
                <div class="w-[56vw] flex flex-col items-center">
                  <div
                    class="flex items-center"
                    v-for="(data, index) in item?.resources"
                    :key="data"
                  >
                    <span>{{ index + 1 }}</span>
                    <p class="text-[12px] w-[45vw] ml-[3vw] flex flex-nowrap">
                      <span class="overflow-ellipsis w-[155px]">
                        {{ data.uiElement.mainTitle.title }}</span
                      >
                    </p>

                    <span
                      class="w-[11vw] text-[14px] text-[red]"
                      v-if="data.uiElement.labelText.text === '热门'"
                      >{{ data.uiElement.labelText.text }}</span
                    >
                    <span v-else class="w-[11vw] text-[14px] text-[green]">
                      {{ data.uiElement.labelText.text }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 精选榜 -->
        <div class="mt-[6vw] pr-[4vw] box-border">
          <h3 class="font-[800]">精选榜</h3>
          <div class="flex items-center justify-between mt-[4vw] flex-wrap">
            <div v-for="(item, index) in defaultKeydata" :key="item.id">
              <div v-if="index == 2">
                <div
                  class="w-[29vw] mb-[2vw] h-[29vw] rounded-[8px] bg-red-700 flex items-center justify-center text-[#fff] relative"
                >
                  <img :src="item?.coverImgUrl" alt="" />
                  <Icon
                    icon="ph:play-fill"
                    style="color: white"
                    class="absolute bottom-[2vw] right-[3vw] text-[5vw]"
                  />
                </div>
              </div>
              <div v-else></div>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="精选"> </van-tab>
    </van-tabs>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { getrangkingAll, getrangkingAlldata, getrangkinglist } from "@/service";
import { useRequest } from "vue-request";

const active = ref(0);
const { data: defaultKey } = useRequest(getrangkingAll);
const { data: defaultKeydata } = useRequest(getrangkingAlldata);
const { data: getrangking } = useRequest(getrangkinglist);

watchEffect(() => {
  console.log(defaultKeydata.value);
});
</script>

<style>
.overflow-ellipsis {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
</style>
