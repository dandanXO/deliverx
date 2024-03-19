<script setup>
import { imgUrl } from '@/assets'
const burgerMenu = imgUrl('burgerMenu.png')
const Storefront = imgUrl('Storefront.png')
const card1 = imgUrl('card1.png')
const avat1 = imgUrl('avat1.png')
import { useWindowSize } from '@vueuse/core'

const { width:screenWidth } = useWindowSize()
</script>

<template>
 

  <div class="bg-[#2B2B2B] w-full h-screen page">
    <div class="main-contain w-full">
      <div class="header w-full flex flex-row justify-between itemas-center px-[30px] py-[15px] sm:px-[50px] xl:py-[20px]">
        <div  class="flex flex-row justify-start itemas-center flex-1">
          <img :src="Storefront" class="mr-[9px]"/>
          <div class="text-white flex flex-row  items-center">
            <div>NFT Marketplace</div>
          </div>
        </div>
        <div v-if="screenWidth<1280">
          <img :src="burgerMenu" />
        </div>
        <div v-else class="flex flex-row justify-start items-center text-white">
          <div class="px-[20px] py-[12px] mr-[10px]">Marketplace</div>
          <div class="px-[20px] py-[12px] mr-[10px]">Rankings</div>
          <div class=" px-[20px] py-[12px]  mr-[10px]">Connect a wallet</div>
          <div class=" px-[20px] py-[12px] bg-[#A259FF] rounded-[20px]">Sign Up</div>
        </div>
      </div>
      <section class="section1 px-[30px] py-[40px] lg:px-[72px] lg:py-[80px] xl:px-[115px] text-white">
        <div class="flex flex-col sm:flex-row-reverse">
          <div class="text-[16px] font-[400] text-white mt-[10px] sm:mt-0">
            <div v-if="screenWidth<640" class="text-[28px] font-[600] text-white lg:text-[38px] xl:text-[67px]">Discover digital art & Collect NFTs</div>
            <div v-if="screenWidth<640">
              NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.
            </div>
            <div class="card1 rounded-[20px] bg-[#3B3B3B] mt-[40px] sm:mt-0">
              <img :src="card1" class="" /> 
              <div class="px-[20px] py-[22px] ">
                <div class="text-[22px] font-[600]  text-white">
                  Space Walking
                </div>
                <div class="flex  mt-[10px]">
                  <img :src="avat1" class="w-[24px] h-[24px] rounded-full mr-[12px]"/>Animakid
                </div>
              </div>
            </div>
          </div>
          <div class="sm:mr-[30px]">
            <div v-if="screenWidth>=640" class="text-[28px] font-[600] text-white sm:text-[38px] xl:text-[67px]">Discover digital art & Collect NFTs</div>
            <div v-if="screenWidth>=640" class="text-[16px] font-[400]">
              NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.
            </div>
            <div class=" w-full py-[19px] bg-[#A259FF] rounded-[20px] text-center mt-[40px] sm:h-[60px] sm:w-[220px]">Get Started</div>
            <div class=" w-full flex justify-between rounded-[20px] text-center mt-[40px]">
              <div>
                <div class="text-[22px] font-[700]">240k+ </div>
                <div class="text-[16px] font-[400]">Total Sale</div>
              </div>
              <div>
                <div class="text-[22px] font-[700]">100k+ </div>
                <div class="text-[16px] font-[400]">Auctions</div>
              </div>
              <div class="mr-[5rem]">
                <div class="text-[22px] font-[700]">240k+ </div>
                <div class="text-[16px] font-[400]">Artists</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
