<template>
  <div>
    <div v-if="name === 'admin'" class="system-message">
      <p class="text-message">
        {{ text }}
      </p>
    </div>
    <div v-else class="user-message-wrap">
      <div class="user-message" :class="{owner}">
        <small>
          <strong>
            {{ name }}
          </strong>
        </small>
        <p class="text-message">
          {{ text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Message',
  props: {
    name: String,
    text: String,
    owner: {
      type: Boolean,
      default: false
    }

  }
}
</script>

<style scoped>
  .user-message-wrap {
    display: flex;
    flex-direction: column;
  }
  .user-message {
    background: #333333;
    color: #F5F5F5;
    padding: 1rem;
    width: 60%;
    margin: 1rem;
    box-shadow: 0 1px 0 0 rgba(50, 50, 50, 0.3);
    border-radius: 4px;
    position: relative;
  }
  .owner{
    background: #F5F5F5;
    color: #212121;
    align-self: flex-end;
  }
  .system-message{
    background: #ff4500;
    color: #F5F5F5;
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 4px;
    box-shadow: 0 1px 0 0 rgba(50, 50, 50, 0.3);

  }
  .text-message{
    font-size: large;
    text-align: center;
    margin-bottom: 1rem;
  }

</style>
