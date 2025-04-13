<script>
  let birthDate = '';
  let enlistmentDate = '';

  function saveInfo() {
    // 여기에 저장 로직 추가 예정
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