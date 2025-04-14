<script>
  import { db, auth } from '../../firebase';
  import { doc, updateDoc } from 'firebase/firestore';
  import { onMount } from 'svelte';

  let birthDate = '';
  let enlistmentDate = '';
  let isSubmitting = false;
  let currentTime = '';
  let currentProvider = '';

  async function saveInfo() {
    if (isSubmitting || !auth.currentUser) return;
  
    try {
      isSubmitting = true;
      const userRef = doc(db, 'users', auth.currentUser.uid);
      await updateDoc(userRef, {
        birthDate,
        enlistmentDate,
        updatedAt: new Date()
      });
      alert('저장 완료!');
    } catch (error) {
      console.error('저장 실패:', error);
    } finally {
      isSubmitting = false;
    }
  }

  onMount(() =>{
    if (auth.currentUser) {
      currentProvider = auth.currentUser?.providerData[0]?.providerId;
      console.log('Current provider:', currentProvider); //디버깅용용
    }
    const now = new Date();
    currentTime = now.toLocaleString('ko-KR',{
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
  });

</script>


<main>
  <div class="info-box">
    <h1>MiliTrain</h1>
    <m1>service.militrain@gmail.com</m1>
    <m2>일시: {currentTime}</m2>
    <div class="logo-container">
      <img
      class="logo"
      data-active={currentProvider === 'google.com'}
      src="src/images/google.png"
      alt="구글"
      />
      <img
      class="logo"
      data-active={currentProvider === 'kakao.com'}
      src="src/images/kakao.png"
      alt="카카오"
      />
    </div>
    <div class="dotted-line"></div>
    <c1>사용자</c1>
  </div>
</main>


<style>
  :global(body) {
    background-color: #f0f0f0;
    margin: 0;
    min-height: 100vh;
  }

  :global(.logo) {
    filter: grayscale(100%);
    opacity: 0.5;
  }

  :global(.logo[data-active="true"]) {
    filter: none;
    opacity: 1;
  }

  .info-box {
    background-color: #ffffff;
    border-radius: 0px;
    padding: 1.5rem;
    margin: 1rem;
    width: 350px;
    height: 650px;
    margin: 0 auto;
    box-shadow: 0.2px 4px rgba(0, 0, 0, 0.1);
  }

  main {
    padding-top: 5rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  h1 {
    font-family: 'pretendard', sans-serif;
    font-size: 1.4rem;
    font-weight: 600;
    text-align: center;
    position: relative;
    top: 1.5rem;
  }
  
  m1 {
    font-family: 'pretendard', sans-serif;
    font-size: 0.75rem;
    font-weight: 500;
    margin-left: 5px;
    position: relative;
    top: 3rem;
    color: rgb(117, 117, 117);
  }

  m2 {
    font-family: 'pretendard', sans-serif;
    font-size: 0.7rem;
    font-weight: 500;
    margin-left: 5px;
    position: relative;
    top: 3rem;
    color: rgb(117, 117, 117);
    text-align: left;
    display: block;
  }

  .logo {
    opacity: 0.3;
  }

  .logo[data-active="true"] {
    opacity: 1;
  }

  .logo-container {
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;
    margin-right: 0.5rem;
    position: relative;
    top: 2rem;
  }

  img {
    height: 15px;
  }
  /*
  :global(.google logo) { width: 15px }
  :global(.kakao logo)  { width: 15px }
  :global(.apple logo)  { width: 15px }*/

  .dotted-line {
    border-bottom: 2.5px dotted #b3b3b3;
    margin: 2.5rem 0.4rem;
  }

  c1 {
    font-family: 'pretendard', sans-serif;
    font-size: 0.9rem;
    font-weight: 500;
    text-align: center;
    position: relative;
    top: 7rem;
  }
</style>