<template>
    <Card title="Contact Us" class="card">
        <form @submit.prevent>
            <p>We would love to hear from you! Please fill out the form and we will get back to you shortly .</p>
            <TextField label="Name" type="text" v-model="name" required placeholder="Enter your name" />
            <TextField label="Email Address" type="email" v-model="email" required placeholder="Enter your email" />
            <TextField label="Organization" type="text" v-model="organization"
                placeholder="Your company, school, or group" required />
            <WithLabel label="How did you hear about us?">
                <Dropdown type="text" v-model="hear" :option-display="(a) => a" :options="howDidYouHearAboutUsOptions"
                    required />
            </WithLabel>
            <TextField v-if="hear === 'Other'" label="Please specify" type="text" v-model="howDidYouHearAboutUs"
                required placeholder="Tell us where you heard about us" />
            <TextArea label="What would you like to know more about? (optional)" v-model="question"
                placeholder="Tell us what interests you or any questions you have" class="text-area" />
            <AppSubmitButton type="submit" @click="submit">Submit</AppSubmitButton>
        </form>
    </Card>
</template>

<script setup lang="ts">
import SubmitContact from '~/composables/SubmitContact';

const name = ref('');
const email = ref('');
const organization = ref('');
const howDidYouHearAboutUsOptions = [
    'Website',
    'Social Media',
    'Friend or Colleague',
    'Advertisement',
    'Other'
];
const hear = ref('Website');
const howDidYouHearAboutUs = ref("");
const question = ref("");

const submit = async (done: () => void) => {
    try {
        const hearValue = hear.value === 'Other' ? howDidYouHearAboutUs.value : hear.value;
        await SubmitContact(name.value, email.value, organization.value, hearValue, question.value.trim() === '' ? undefined : question.value.trim());
    } finally {
        done();
    }
}
</script>

<style lang="scss" scoped>
.card {
    width: 100%;
    max-width: 700px;
}

.text-area {
    :deep(label) {
        text-align: left;
        margin-bottom: 10px;
    }
}
</style>
