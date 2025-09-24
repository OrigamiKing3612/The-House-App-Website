<template>
    <Card title="Terms of Use">
        <div class="container">
            By using this app, you agree to the following terms:

            <h2>1. Purpose of the App</h2>
            This app is provided for use by schools, churches, and similar organizations to track and manage group
            participation and engagement.

            <h2>2. Your Responsibilities</h2>
            <ul>
                <li>Use the app respectfully and for its intended purpose.</li>
                <li>Do not attempt to bypass restrictions or access other organizations’ data.</li>
                <li>Do not share inappropriate content or misuse group tools.</li>
            </ul>

            <h2>3. Account Access</h2>
            <ul>
                <li>You are responsible for keeping your login credentials secure.</li>
                <li>If you’re using a shared (group) account, only use it as directed by your organization.</li>
            </ul>

            <h2>4. Admin Rights</h2>
            Admins in your organization may view or manage your account, including assigning house,
            or removing access.

            <h2>5. Modifications to the Service</h2>
            We may update the app or these Terms at any time. In the event of major changes, we will provide reasonable
            notice through email or in-app messages.

            <h2>6. Termination</h2>
            We reserve the right to suspend or terminate accounts that violate these terms or misuse the platform.

            <h2>7. Disclaimer</h2>
            The app is provided ‘as is’ without warranties of any kind, either express or implied. We do not guarantee
            uninterrupted service, and we are not liable for any outages, data loss, or errors caused by third-party
            systems.

            <h2>8. Governing Law</h2>
            These terms are governed by the laws of Texas.

            <h2>9. User Content</h2>
            You agree that content you submit complies with community standards and that the organization may moderate
            or remove inappropriate content.

            <h2>10. Limitation of Liability</h2>
            We are not liable for damages arising from use or inability to use the service.

            <h2>11. Contact</h2>
            Questions or issues? Email us at
            <SupportEmail />.
        </div>
    </Card>
</template>

<script lang="ts" setup>

definePageMeta({
    layout: "tab-view",
    title: "Terms of Use"
});
</script>

<style lang="scss" scoped>
.container {
    text-align: left;
}
</style>
