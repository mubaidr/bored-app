<template>
  <div class="columns">
    <div class="column is-offset-2 is-8">
      <div class="tabs is-large">
        <ul>
          <li
            :class="{ 'is-active': listViewActive === false }"
            @click="listViewActive = false"
          >
            <a>
              <span class="icon is-small"
                ><i class="fa fa-plus-circle" aria-hidden="true"></i
              ></span>
              <span>Activities</span>
            </a>
          </li>
          <li
            :class="{ 'is-active': listViewActive === true }"
            @click="listViewActive = true"
          >
            <a>
              <span class="icon is-small"
                ><i class="fa fa-list" aria-hidden="true"></i
              ></span>
              <span>List</span>
            </a>
          </li>
        </ul>
      </div>

      <Transition mode="out-in" name="slide-down">
        <keep-alive>
          <new-activity v-if="!listViewActive" />
          <activity-list v-else />
        </keep-alive>
      </Transition>
    </div>
  </div>
</template>

<script>
import ActivityList from "./activities/List.vue";
import NewActivity from "./activities/New.vue";

export default {
  components: { NewActivity, ActivityList },

  data() {
    return {
      listViewActive: false
    };
  }
};
</script>

<style lang="scss" scoped>
.tabs {
  margin-bottom: 0 !important;

  ul {
    border: 2px solid #eee;
    border-width: 0 0 2px 2px;

    li {
      margin-bottom: -1px;

      // border: 2px solid transparent;
      // border-right-color: #eee;
      a {
        border: 2px solid transparent;
        border-color: #eee #eee transparent transparent;
      }

      &.is-active {
        a {
          border-bottom-color: #fff;
        }
      }
    }
  }
}
</style>
