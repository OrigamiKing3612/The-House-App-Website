<template>
    <footer class="footer">
        <Card class="footer-card">
            <div class="footer-top">
                <div class="footer-info">
                    <img src="https://the-house-app.com/apple-touch-icon.png" alt="The House App Logo"
                        title="The House App" width="64" height="64" class="footer-logo" />
                    <div class="footer-text">
                        <strong>OrigamiKing3612</strong><br />
                        &copy; 2025 The House App. All rights reserved.
                    </div>
                </div>
            </div>

            <div class="footer-bottom">
                <div style="display: flex; flex-direction: row; justify-content: space-evenly;">
                    <NuxtLink to="/terms" class="link">Terms</NuxtLink>
                    <NuxtLink to="/privacy" class="link">Privacy</NuxtLink>
                </div>
            </div>
        </Card>
    </footer>
</template>

<style lang="scss" scoped>
.footer {
    display: flex;
    justify-content: center;

    .footer-card {
        .footer-top {
            margin-bottom: 1rem;

            .footer-info {
                display: flex;
                align-items: center;

                .footer-logo {
                    border-radius: 8px;
                    margin-right: 1rem;
                }

                .footer-text a {
                    text-decoration: none;

                }
            }
        }

        .footer-bottom {
            text-align: center;
        }
    }
}

.link {
    color: var(--primary);
}
</style>
