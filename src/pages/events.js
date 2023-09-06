import React from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


export default function Events() {
  const imageLinks = ["https://lh3.googleusercontent.com/pw/AIL4fc_lCoB9tZOoch2JjJSkP2P2n_bnk6kcVQzH3mrtuXxwPeb-iv1w2S30vErbuSuj0guwwnZG9zwuS7yakRE7HB3BTBCU1CsxZ0TjxOgQ8jRhsU1t3Ao=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc_mvIQEDE21jWbrHhnWDpYvSLuvwBU_pz6IopRvWHKpkj4D-Onlas5U0_J-XH0y8d-UJ97BFSm0m9LE0wNyNa2BarnCcnj1_XM6PryC7oo-27uui2k=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc_h-iv9v0ekg133wOq9ETsgGStjkg-f6S_tIVLHLxmBDUoOv_Pm2AwBNNAkH9T-LiezbKPCdqGdsNZF3F9PHcRSujNcl7nvwYHAcldsRTzRvLyQM3c=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc8rcbkVmkyDBBC17Xu4jopj8xozg7hesK45jtyJm5QJ4zM_21pXbMHyn9TtQGZEVmhVJQWKv4DqpX6CVSbSpzxMC3t3VwZOYuubmX5e7FTm1LCS2NQ=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc-KCYwDGKjuy35SUgaoYi6V-jPpyUlXHK-kc-c3iDZN-aEqnxLkQEI38a4UCD42iSrEqmEHtpjwJBD9Hd6mfEuOwj0-VANzpLnuUzGzqvCCRWTWED0=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc_bXtPnvuJQ952MaahuWvdYivuynKBpQwGsgwUGnluMD-02tMbqRGo5ZJfdtBwroHEb3eLkdaZ4Z8BTD8YOEVCnzVg4YJU0judRnGDwHUD1gtlc9Og=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc-10ce7da38LAV0KA1vKFf614qOenKkPl6klR2-oitPcdlEyeXt_iRPS8NXbRsE13PuUcrlKhz8fBEoyXUHswBT-1FUr5Md2OdwsoFudJAbA-fqG_w=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc-zMk60y1CFXnu9HCe9ZV9ddi1hbOc2u5V4RVrBiijSg9_lW7HdLLasL3VqFeI1cnl73HmVKJmk3pVx04EXqsOeO3_Rjrx-r0YQvwIkE5c0gVrnhAw=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc9sERDvNhzv08WAC313dFblKMSAyiBuKaGZSKJw0HtAnlnIQbDfuhiCfKHh-11t8Kn1H5Y-3ANzLJfV6WFT3y3ElrR_chExuKDogVdCOtX8PYxgNfI=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc-dOmSH7eYc_6fjYhGdfi97BRKD5YFnNFGxqbGA1Iai189YUAKdgiXhQ8Sdz1kdv2x7k58jgp1-03coYAHMul7pROWxLVpusodPCiDRwjTUX8y9Z7A=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc_RDo-Dr79B2u23OT2PWlNDBe-UtH_4CFPK4YCJnujiR0FOAM4-CY2XJC_EP3h9RsfxRJnZ4ss4rvhtpfXTv02AL4IrJ0zksn_1pDhstCkSjUYcDhE=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc8l_p8ItEXSE1u7BJIujfBHh8afdqL1Z1Ud-0ZpgP6gJQXDwV6mb2_Xz-WcUCy5dAmmXXqAFqUeUpdBbGUfHLmPjEj1DKtOpJXFCHsOWmRPySZo6HU=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc9VFHgrT3lt2O-slX6NGStlURONfJ7HvF8zJagQKb88vzwbJuq7wWwAr6Yq-ne9p92HSZtBm5IzIBMa5PvoGMz6PYTYgKDywt_7NaK_DEI5N9rrjaU=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc83qlzkGhOyRoQ7p2j_lnANlzwGl92v5kN1clqP46xo1JWUOyWZ9E3YP0WDGE-yG6Qgd9frgsM8oV-RK-bKzq9tis7xNOwVY2b2rdOYKc-FZXniFZ8=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc8nM4RRiX_T0z_mX6880qu7p_1eAbmvSuRzgy3Wmm9OfIdxVXHmOSkAQMW-P9Z3fg8HjKLzhYBLGUqOpijYYenAnINuRwSVT5pOmN7gT29OVtqGOa0=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc_YVB6T_G82v-1P6y_LzEQGglRY6L8Fp1C9jDEOEAamjQkNEfV078Mfjy_BRFqCk9QOxIO0SCQU9AsBzF5liEzXRYILyagaeapo7MpO2kExMSF6jow=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc_XfHhf9zV985M9zT4crhajSj6aLjz4hOwCso60v0Oeh0ApTdkyszW7jWknBHeXkjFW1cA4OsnnIz7JjhUaX726siO2qWLqThodiJwIjow5s1pyG2M=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc_xrKH_lAlq71W5qbnup47q6IJ7RcwIKekgr8l1BY-xa5xPBJVzz_mXnmTmIF-Z3Nj_SoNgKYWeAKcMwnpHZCkFGmmCD3cXp6nCV594Qf2Qm_mhF5s=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc-gUlHfbq53pzbrCnl3XZwEmJ1_Wa33LBe_bKGUdrxIBCrbHfxsBuvsp0xpB2M6Wgl5GFi_hiwcrxJ3BinlqyQqOf1F7aWzLkyePmvumrNCxKP9DD0=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc-ib6ZdZhgFA9l3-jETefdhow5U6P7BcjEUDzeLhK8g8q68oIW59T1SX3gAUY37zEjilM9sFpFUh0pgdVA_v3BiVJjcponrhDpNiJSOXNDodMS6huY=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc-pkL2yjyKVdjdMEbRgp7xbDR85b37oR8RiD8bRX06SWgHD2MHZdLMpfBifVZNiOIhdpJKRq0sYwsgw2ZHJ2cSCoBqwZEuLQ_nfLuY7nlqEkFl7Le4=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc9CU0OjoNspRL6tyXdLmuSf1tUNumC5xNXq4YwbgIylEUVOmD5gyUm5jB1BOmQ4fS-sHDu_a77ZeEHAVAePOdvoshMhr3StCfiAvhBNkkMwo6o9_fY=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc9O7E3uS_EVdD-wBRaqjKuTNbICGw7lkAt-DdmYqqSxBjBp06zGEIc6eb1EI4WKNu_g49ttwTLyEzN0CqgTROr36PEgH2oYqwNbwltKI1PrVngkYOQ=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc-_oBf47El6xaV1DorLgyg286MuCj94ToIZSP9vWSr1PQd-Hobqp3O1tVO7tYrxN3eZ72TOByun4nYJqpna4L7RszOH3vNv1BJQLIzzfAJQ7Jg5hv0=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc_kXPjI63SqAhRCMTsJPEACDX9zVr7qQAvjdBqOyIWFaF5vROGa1JWybcuYu4z627po87VN7FCQSHRcbuennKLqzsizC_oL5wUfS4dELrxtEptRvPI=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc8sSnV9gD0MRS5DmgXBxpuT_VKKUSpHZQKlzR7oGpO8DhSkqywZZVRfAQanv2-HxzvMtB3WTd3XKbTiTtQlukC9owd-r61Ov7ZgZ8oyuAi3n6K__j4=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc8kU0AgfWe8m1EPUT_dpr4o2YRApa0gGdilCKqgX-kzL6W875HqeACUTwrCNSl8t9939YHWShITo_fyjvc12t_18yfz6c5yQmz1tjToDGovs1ZfhoQ=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc-IcXnAS-vo6fdKNGB935nTHjnGz5lUtePu_AR3GGjlG1oAfQWmnTmzJRcfsORZUq0Fjj50iHe5rc0nxGsYRwY1CqPAXXQUS4r9j_C2hhNFO5Lo-qU=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc9zUOlJ9hPRkgJZDYNIqD5nj4i9xDESQDf1C10bW2tyMrAk0lo7ZegDmypBmHyTUlLrkERH4fVbbR7EjEWTisy3yv9bpXOaR5zR0_IuEGuVt0qtuic=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc-KDIMujIhEHfK7u8sQPB7Pqxrbb42brUs9B-0oJKGdpVO05VvS5VuYxX1cWEn9y99FFqRUbjVaspH9dWI8idGyqfW1NZrlqcFTEM28O9nHb8ZWVhU=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc8Hk4JA-kHK6XyrjeYd00D0yQ3896w3AnT8taxk8dnB7qMjCAYuN-uQthFOphDkyMSuFAc4vAHvcG8EUzzGIHPHTcgpzjE6GiG_0-Tua9qOdudgMhk=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc-HafUefHPW-y2gMcROrxuyUN_OgmNTddGx7IsSfppaEFl8tDt9wx8Wx9fBXIoiAkftu2j99LRbYX9Ey-UH1zwKOIvfAgUaZ4syBaezYOZR6dr48Ww=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc9nSTp2dNYumgCCKl2LvkzURChWNAMurbL503DdRV7aT0RayC17z-_6bXrsB2-n18K7aYg6QjNnHscy9pqo9uzAMt_hG7Ur87tqEf3zaQ2t0YpUH0I=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc-jRAKjAO1_aSJBADtren8pS2iBRfOY9l8NUPUFO50JfKz521Zwq2OZ0hV3hKtE_HkWgFbptRbsLC56rc4JY4m2rhtjAJKHQJ1jjL0zCRSMxcUw5EA=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc-DYtWAlglfOSvsEAUBdJzTA3h1NFKU1mTxVd8-s7EdbXCFx030p-wOW7U2yzFyr4dal-Lt-of0O4hHJpMAPkROFC5vJxgQUs2JwP3ezW5EIiffxzo=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc-QO6ipqqmVvIKLrxtkwIZidZjXkEgy4ImULfc4K5OsDV7pDKgi6YXX4gsE-dA2WTBgLHOptgFHgWXI4xcwGuTUFJdTA3lChJz-hWYyO_54NtI58IE=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc-ZC4qgs1DEQwSdNsPYiZsVmdR9xMxY2fBLJGlckkoN5_wgaJvHrEmRAQ8WTgT_eeYODSRBYByY1wL5CCfd1RRfY4nrAXwKYNQBtg9qM1Ar3-PqHpU=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc9VxmCS6HpV7T7graRDygy5XM-s2yD-T3a17qkMevCbuTQhv9kyFzBGbR_ygziMQ4T7NyP4qKfR1fPkqBKeI6cf0gnmfRVXk6qRF0TEmwWPYGD_lbE=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc_6tCh2Tw1FnKvp-iJfLKWggkDYKEdlnkCBz7CO0CLvq2awoVnkQf09hgxLGQi8k9fmbQ9a0alu_ZMw4Tt-ThPyJFUY2DqWLlu1Dp1_8lplFhtL7PI=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc90e_bWgdu6cv2JAKT6h1ePBlKmMUfUU3t4qVHLh-yFCQNMwdUk_hzl8IVGpkTI9SymjzmTZ-CQ6EDRSHvJ8St5ft2nqKrlESy5DLHal_Tt2k3PLos=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc-4Oid2eE_QyXw_y0w-g-9RVH4UZBFw4Bm9Rf-Vd85UFdZqwCyitwP18f9oE2o-hf8qY-fmvccI3FjNuN8F23tcSkn0wh0O0q281j38cQ37lRrnEPw=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc8lJHv68Fm7lKjQwqLVbY4oUzKBroRuUZGm3tn7HAzscRMGWFy_PZQwXvNECT8u3H4mo0iWtv2h-uoQCjoV2fVMU4H5FgzSqikCNd9VSk6BNcRDNAo=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc8iNr4QslEi3YGgYHrtQfDVDd_ek4jFscIEKG58AKa_j_ngaH7kAM5bIuCCC6kdgNEJtCjaU1cFbiMU-gSMGhONBR6s-yWXwMGhOBAY7jDup9pXrcM=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc-sP4mNhh2n3ZqxiG9XoqpZWIma9PxG8w4OlkpwhSZeWonjBgulfp3HPYgn90MfO_Fyk9aAhkuL1If4ww-E0K0Xb8UAzhW9HvOgaWdt18Naf_172kM=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc9DPHO7Nxd6gg5__KYTPtEhPegBAKzWmTmnBjBNNcpY-tbqg729NWNTPTwSbhYoQVS-FYpZDYda3FcG8NR0ZsZGsHYKzBR5l5J1v1mBi6eHsewPTQs=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc9AUjpcxjX8uun1VVMiqhEil0SE2sNvG_34dX2Gg_reZyX3_eEWn837mn6Gj5uE5HwnmHDsJHW8kSXNG-SkakHFdESHPuw2EvlNCGM_8l10QMS-OrY=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc9c3DANu0mwtbSGS4NB8zJYi3kZGSjZLSvjPYO5oHBs42CRo7FwBlEh_V5uyrbG_Pe-BPmqTlmJN09t5WhIKLk1JK3vHF8fWL1gTdLwBC4d9QwzzAs=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc90x01Ch8SasQUZEix-60idiF9DRx7HV2Dl16qa0Q_JzeXHWHTLQ6gg6YpzVosvDTBkRbw9FHqNjyUaJw6KDUJ9PY4NW4DaSTgMGqEWk9c9TPmpYzE=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc-qJUkImT8ezV_fVbp2TlQx3pJDYE1dBhwUhSu5ItFLMaLDSW-KRM2DYdb9D-bBzZHXaSoiwjNOCKr8Xsm4_qzWBnUYqlqRd6p-lzX_DUfN67CL1gM=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc-X7uxEPF8MU875c3GneE12gTIJ9_SyDlQ5XmqbtOeBmWjj0tBcOODQgivGXkCDnJ3S9Be10Ygjfcsul4ueMR_VCzmWKkVdy-qINwLLgCpIaoHH8i8=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc86SipXJcnzr_wYz-gVj3i26OLzlJq7S-xHzBBQ2B2zD_ubneUhZ1Wq1Pa3x83WVTShAlocgbQfvge8XAYEVq9y-lpNrpE1DvaHVhTaixIzsqJqmAE=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc_OTg1gjHO6l-cOBPVS0oHGWdbAXsOsrpLgUq7k-NVo_f1lIR_ezt5NdDMUBNBL_dvfn3jXhzZiaXVmUI_4W6Ks0qBLbjdA4CKXLf59IGspd_kRzWs=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc-CvhpJnb02b2auJGHKBUF-dt-FskNR70WMa6BS_gd8WbpMjfL6mh2U2uE49pB6s-Oy7DK07lfwWVYDKD5XE-kcyzhDwTBSUtS5mm5FjLXWBKEBZ9I=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc9ANV4lz7K3tWyF5bBGEvPkFeflCChUtYqaycTM6eTFsepdjDVdzInaPhsXpoDTUcZMrRwda7ieOtKlvdiC3Zu14xjdaSfm0umpLbxVunNcbwh8qMY=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc-Mx34RZTNBTjJr9SDu8iYuzBSErhWMlD2Ld8DWhhtOhseWN99GpED_tENJef2LEsXaXuTiKJA_49QCa44Q5NpeQyVvQMKwFrzkYSr8FCnnsjDFemk=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc8SB5LMc2IVwwAFJXIaVjcg_2UEpAJ4JqETosQbxLLiMm9quUt8Rq9zg9cnxVUeFLt2aGvdM8yoR7U7-MYQDmquFsbUSQYybcyNR2BgqCq9TH_o4Fo=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc_E11IsNM38tG1KDKFlxKRm1fF2g33TY7LUWSwy7qi4hqesuplSlVcemSZgKx86HLI2Mezp2kN1K6I57T78jyrbpSgujbyVShoGaCKWteIWjk6y9ow=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc96seyLMvfLnYVobmc0Y-Or4l3kKJM_lJQEFpu-sEaOqC2UtaNObajwtke5g1AxzGXksFG3TOhPyYF9YEOHQLpkPy_nY2tbLrHUWIfvQDDNkyN9Ojk=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc_8Bn-vwCcB1ig2OriSNK9Gi9YH6Q99HWnPAP_KRmXbmvX4Gvkbc2mRa2V0lwL8Vlqwb5pcfNyrlu0Axo7YkCMVwZr4WdCy8DPB8Rb5DtMJjALKATg=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc_nItuioVZYwYt6NYXrTG-jBnH8zQwKj86wr2yubcELtZmWHwbJtHv4gByAJFai7uwY-WLYHiN5zeG4Chjz5Vjhe8vjHbqCsJXh-Wi2Pe2w0YnqhLM=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc-2th1xKmAvphrb3w_BuMBJqy8yueApNNgaZrIFXQ38t0dGDx_jyrPTH-X-cr63Fh-YZkSdlBvP1rCP4yYwvM9udFX-cMF0jV8M0rfmUGev7ydB5IY=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc_TrBcRRN9aKaJxC757Cfm75i0W-DCeZnxS4ZjsoZcw2GNXd8U4ex6aUt69agEqBIVwm_dRZr4M3M_Q9AgSMRsGWeHK8--1UtLO1Y1Ly6Ewy-xsMfI=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc--ADGBrZ8k-9SfPZt4INZrWCZUd29GgmsFwvPdlYeO1YM_qwKomasNKhJo92ujNoyb_Pa4SmceDwN5ROF_Rp_9pJv228sDLu2n6TtH1VKQoD9QOC0=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc-S6eSzYSiOLIvGiJ6te_gDQMkx3Q1XpYVu5lbmV0SNPAmvWrE2h5-Pf-h_rctEapxD9cnjJNi8cXyP87qTL2uGoZgdRQUwuARc9k_OzSRJjyaiMwA=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc8cpnniM4R5QNUXm4pa1ShQfj3bhXXhPZ-MJCJHoOt3aoF3-Rivq4fi5YEYMMDSdSeIf_tUhO-pD6nIFuUsgcQQA2Y8sQWgIEnCPnrxliY9vGy68dI=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc8teCEsjzoYCh6ihG6PpVIoZw9okARn0jIB32RRoHojF-bWRUFAmJNktstYCmX30HSxx2EDixRwW9Jb-BtvDHGz_LBWEcXomnnf389iyVshKQ4ELcE=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc97d8VMzg4X92fqACM0RS1pyBSC5L4INZmz192XPf2m_hWXtfdHzu1bLqdz0x5osmkSgGfNJivmwIYjjwFl4rWIpVYGSC_RIOPy2spk36nrKxMdhA0=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc-vHHnAV2h4S03vw4YwNw-K-i_XfIyzUzSSjVFgSWeHiRrdGT9OBe2-xrgBG1I3VC1bSSLpP8W7vYjXl8VkEfV_6dBASgWEffK9ahk_AZXMVkKKb4I=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc8fEBRel8lDqp3DSGlJ8HAhyjL0NJuwHlHK7HYMD8K_SlcdeGmzyiqn5Qzjg-Z2FBhI8wCZq2J3UPY9phvAZxRk081z9lgHmQ125KGoqIdzTEozo2c=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc_myyeQz1sfhAa_pXRbR7mPuITerXcjU8A1-op6jVZ7pxTTzDpVa0FfDV8P3w-LvPz-6L3QFUM-W_Slw4txuo_igPHz5PZGuUX1N170S3FJW_5csEk=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc9fdOZulsffL8lxjnFCqzNe0S4O0A2P-a4n1P6lAS1lwwqQkBtFMkyLrvC-IeOa-PNpshQcFOSG7hRoM23n4t9q5rwornv0RHSd8gpHjtHdDY25uDw=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc8hjVnoPmL4lMEDsYF3V359rlQoW3UsoZIBSSxeTVHaJDTf1X0QKbsHV1QIdUMByvylgTOiT3Tj5ROinUt2zVzsVLpHbU2qL9au0r3TfjTxXXFlU9A=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc9hIhLm-tUgU8Vi2WkUTFmeWY68RdOnuwKq7ailPjmdQE4AoPiwyhQvJpYPdHxhFiF58-6xcmC6QBKK_g8JbFBkP8iJSfxGUjfe0LCjh0EPyXNsGDs=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc-LImRZd0vqzp2I_1YEnLfQWGuTWiubx7R-z_Z7ap1cUmaKtcTv9VWyK0XxePyQGZLJ2b64J6n9VWQIEX1Us5QJzE4oNTVZxtXLcGEWufiN8QxPxSk=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc8BqaIV4b3yxj6eVX0lDvTw-tO4BZySiWrOXh1_2t_412u2xRgCaoljKhdXfYI9y460LshMPD8DKMCD7HRz5q9deiFOKmHok7rN5r74_O61cVPl8D0=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc-4DO-BuWTOnDioEsFJN1FQzWidINUrPe00AGvYHJOwAQuyey7dzGWjFfrH0LwWHznAzb6Bmu4lXMI6fzqJA1Ajx_ErjO7t74eGk-XMjSy61VIppF4=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc_rDt-bzDGWFf79r4IbRha9soW6Xb6CUtq_RbZ60l0hpYHNDxHy4lMGfbbc_Y8UmxWNnvf5hE9iDsWn-398IarKjrdNZMvrqutGFDEJcZcd_OJHHn4=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc8JLbZx3vWSinDv2GbbBE409LNAEcKJvtSByK_OfdGkb1YomS2myolM0pd7hl_H8775JhabnLLzgmZIZt66uWxqlQgL7XCYWaotQ-Aq5PJyFG0ta28=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc8lPkSKSmgOSStF3MuBeiAOCoIuO7mx_YKWAS0u_mLADOpV5LZm8vm8tBmqy0UXrPTFPWIjVHe9CqB7iNftMXb1dBdypMhLqV9oM7Y8b4f8xTeMDu4=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc_FCgHHWXJcVsd0wy-GYyuVHGYv2heMTpsJR6o0SdmJNG5oe5PPmSnMEj6fb09v2vUImVRGvbaLvIsxdlX6Qkp6K_EIQTPGRHMtSbmzLrMDlRl-fsU=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc-0cuFWnlm9Lwmp1WeqcPemhDp7e-mogFsF9r29F0hnFHoMuQDr4nZaO6GkfzXD3L-kt_sg9s77Fq-Juc9Ke4e7R7SbJePvtVRqTj-j6eJDZoyi0G4=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc8mSlOvkntSAMUuauJFRpbHdUCrjMd7QyMgzczZ-UERt-bfQN2HTgLgKitGeDsjpc4rjdofjttc-FvTOekMxQo9ukH_NB95E9uhnDwZHeQBMSk_h7c=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc8bSJ3P-WXVYBBTe8fQL9aVBPUw3SeDVBcpUArYo7C7gASIYiouLnzrqbLxPWHQCCCB4ujvRij4k0s-uWLz1GV7ImVW6utq8wEoGTthFDnEOhKhWS4=w1920-h1080" 
  ,"https://lh3.googleusercontent.com/pw/AIL4fc87YazgUXKGYRhSyaXbl_pugwqapW4eSWO_4GJ77ohL2wQBxzjDwgesXoJKq9yA186Se3sLQCDVZkXQKu5VY760rmX6NP4eCW96badaR0ZWw8UMmiQ=w1920-h1080"];
  return (
    <div id="events">
      <span class="text">
        <div class="container">
          <div class="title" id="header">
            Events
          </div>
          <div class="infotext">
            ACM@CMU hosts multiple major events every year, giving fun
            opportunities for current students to hone their skills. Aside from
            our major events, we also host info sessions, tech talks, and ice
            cream socials for the general CMU community.
          </div>
          <div class="grid" id="events-grid">
            <a href="https://www.acmatcmu.com/hackcmu/">
              <img id="hackcmu" src="images/hackcmu2023.png" />
            </a>
            <a>Algorithms With a Purpose 2024 - Coming Soon!</a>
            <a>HackBerry Pi 2024 - Coming Soon!</a>
          </div>
          <div class="infotext">
            Check out photos from our previous events!
          </div>
          <Carousel>
            {imageLinks.map((link, index) => (
              <div key={index}>
                <img src={link} max-width= "50%"
     height="200"  alt={`Image ${index + 1}`} />
              </div>
            ))}
          </Carousel>
        </div>
      </span>
    </div>
  );
}
