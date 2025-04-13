<script>
  import { db } from '../../firebase';
  import { collection, addDoc } from 'firebase/firestore';
  
  let birthDate = '';
  let enlistmentDate = '';
  let isSubmitting = false;

  async function saveInfo() {
    if (isSubmitting) return; // 이미 저장 중이면 무시
  
    try {
      isSubmitting = true;
      await addDoc(collection(db, 'users'), {
        birthDate,
        enlistmentDate,
        createdAt: new Date()
      });
      alert('저장 완료!');
    } catch (error) {
      console.error('저장 실패:', error);
    } finally {
      isSubmitting = false;
    }
  }
</script>

<main>
  <h1>기본 정보 입력</h1>
  
  <div class="input-container">
    <label for="birth">생년월일</label>
    <input type="date" id="birth" bind:value={birthDate} />

    <label for="enlist">입대일</label>
    <input type="date" id="enlist" bind:value={enlistmentDate} />
  </div>

  <button on:click={saveInfo}>
    시작하기
  </button>
</main>

<style>
  .input-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 2rem 0;
  }

  button {
    width: 100%;
    padding: 1rem;
    background: #4CAF50;
    color: white;
    border: none;
    border-radius: 8px;
  }
</style>