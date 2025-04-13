<script>

	import { goto } from "$app/navigation";

</script>
<!-- 로그인 페이지 메인 컨테이너 -->
<div class="login-container">
  <h1>Welcome To</h1>
  <h2>MiliTrain</h2>
  <div class="container">
    <div class="text-box">
      여정을 시작해볼까요?
    </div>
  </div>
  <!-- 소셜 로그인 버튼 그룹 -->
  <div class="social-buttons">
    <!-- 각 소셜 로그인 버튼들 -->
    <button class="google" on:click={() => goto('/information')}>
      <img src="src/images/google.png" alt="구글" />
      Google로 계속하기
    </button>
    <button class="kakao" on:click={() => goto('/information')}>
      <img src="src/images/kakao.png" alt="카카오" />
      Kakao로 계속하기
    </button>
    <button class="apple" on:click={() => goto('/information')}>
      <img src="src/images/apple.png" alt="애플" />
      Apple로 계속하기
    </button>
  </div>
  <h3>계속 진행하시면 <a href="/terms">이용약관</a>과 <a href="/privacy">개인정보 처리방침</a>에 동의하신 것으로 간주됩나다.</h3>
</div>

<style>
  /*
  :global(body){
    background-image: url('../images/page.jpg');
    background-size: 76%;
    background-repeat: no-repeat;
    background-position: 61px 47px;
  }

    /* 메인 컨테이너 레이아웃 설정 */
  .login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    gap: 2rem;
  }

  /* 폰트 설정 */
  h1 {
    font-family: 'pretendard', sans-serif;
    font-size: 0.7rem;
    top: 9.8rem;
    font-weight: 600;
    position: relative;
  }

  h2 {
    font-family: 'pretendard', sans-serif;
    font-size: 1.4rem;
    top: 7.5rem;
    font-weight: 600;
    position: relative;
  }

  h3 {
    font-family: 'pretendard', sans-serif;
    font-size: 0.6rem;
    top: -1.3rem;
    position: relative;
    color: #8b8b8b;
  }
  h3 a {
    font-weight: 500;
    text-underline-offset: 2px;
    color: #505050;
    text-decoration: underline;
    text-decoration-color: #8d8d8d;
  }

  button {
    font-family: 'Pretendard', sans-serif;
    font-size: 0.8rem;
  }

  /* 여정을 시작해 볼까요 설정 */
  :global(.container) {
    position: relative;
    display: flex;
    justify-content: center;
  }
  :global(.text-box) {
    position: absolute;
    top: 11.5rem;
    color:black;
    font-family: 'MaruBuri', sans-serif;
    font-size: 17.5px;
  }

  /* 소셜 로그인 버튼 그룹 스타일링 */
  .social-buttons {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    max-width: 300px;
    margin-top: 12rem;
    align-items: center;
  }

  /* 각 버튼 공통 레이아웃 */
  .google, .kakao, .apple{
    width: 330px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    border-radius: 10px;
    border: none;
    cursor: pointer;
  }

  /* 각 소셜 로그인 아이콘 이미지 크기 조정 */
  .google img { 
    width: 18px;
    height: 19px;
    margin-left: 6px; 
    }
  .kakao img { 
    width: 21px;
    height: 21px;
    margin-left: 2px; 
    }
  .apple img { 
    width: 16px;
    height: 20px;
    margin-left: 4px;
    }

  /* hover */
  .google:hover{ background: #c0c0c0; }
  .kakao:hover { background: #c0c0c0; }
  .apple:hover { background: #c0c0c0; }

  /*button color*/
  .google {
  background: #EEEEEE;
  color: #000000;
  gap: 8px;
  }

  .kakao {
  background: #EEEEEE;
  color: #000000;
  gap: 10px;
  }

  .apple {
  background: #EEEEEE;
  color: #000000;
  gap: 15px;
  }
</style>