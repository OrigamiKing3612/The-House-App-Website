<template>
    <Card title="Privacy Policy">
        <div class="container">
            <h2>1. Who We Are</h2>
            This app (“we”, “our”, or “us”) is a platform for tracking progress and participation across houses/groups
            within
            schools, churches, and other organizations.

            <h2>2. What We Collect</h2>
            We collect only the data necessary to provide and secure our service:
            <ul>
                <li>Names and email addresses of users</li>
                <li>Admin-created organization information</li>
                <li>Security-related technical data such as login timestamps and IP addresses</li>
            </ul>

            <h2>3. How We Use Your Data</h2>
            We use your data only to:
            <ul>
                <li>Provide core app functionality and display progress to your group or organization</li>
                <li>Provide reporting and administrative tools to organization leaders</li>
                <li>Secure accounts, prevent abuse, and investigate suspicious activity</li>
            </ul>

            We retain data only as long as necessary to operate and secure the service.

            We do not:
            <ul>
                <li>Sell your data</li>
                <li>Use your data for advertising or tracking</li>
                <li>Share your data outside your organization except as required to operate the service</li>
            </ul>

            <h2>4. Who Can See Your Data</h2>
            <ul>
                <li>Organization administrators can view participation and progress data for users within their
                    organization.</li>
                <li>Personal account information is visible only to the user and authorized administrators.</li>
                <li>Security logs (such as login history) are accessible only to system administrators for safety and
                    abuse prevention.</li>
            </ul>

            <h2>5. Cookies and Analytics</h2>
            We may use cookies or similar technologies that are required for authentication and application
            functionality. Optional analytics may be used to improve the app experience, and any such data is anonymized
            and not used for advertising.

            <h2>6. Your Rights</h2>
            If you are a user and want your data removed, contact your organization admin or email us at
            <Email />

            <h2>7. Data Security</h2>
            We follow reasonable security practices to protect your data, including encryption and secure
            authentication.

            <h2>8. Children</h2>
            This app may be used by students, including minors, under the supervision of their organization. We do not
            knowingly collect personal data directly from children under 13 without organization consent.

            <h2>9. Contact</h2>
            If you have any questions, contact us at:
            <SupportEmail />
        </div>
    </Card>
</template>

<script lang="ts" setup>

definePageMeta({
    title: "Privacy Policy"
});
</script>


<style lang="scss" scoped>
.container {
    text-align: left;
}
</style>
