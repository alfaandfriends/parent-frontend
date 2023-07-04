<template>
    <div class="bg-gray-100">
        <div class="grid justify-center max-w-4xl grid-cols-5 gap-8 px-3 py-5 mx-auto">
            <!-- Child Switcher -->
            <div class="col-span-5 md:col-span-2">
                <ChildSwitcher />
            </div>
            <!-- Parent Feeds -->
            <div class="col-span-5 md:col-span-3">
                <ParentFeeds />
            </div>
        </div>
    </div>
</template>

<script>
import ChildSwitcher from '../components/ChildSwitcher.vue'
import ParentFeeds from '../components/Story.vue'

export default {
    name: 'Home',
    components: {
        ChildSwitcher,
        ParentFeeds,
    },
}
</script>