<template>
    <footer class="footer">
        <div class="footer-left">
            <div class="footer-info">
                <img src="/icons/light/icon.png" alt="The House App Logo" title="The House App" width="64" height="64"
                    class="footer-logo" />
                <div class="footer-text">
                    <strong>OrigamiKing3612</strong><br />
                    &copy; 2024-{{ new Date().getFullYear() }} The House App. All rights reserved.
                </div>
            </div>
        </div>

        <div class="footer-right">
            <div class="footer-columns">
                <div>
                    <h4>The House App</h4>
                    <NuxtLink to="/">Home</NuxtLink>
                    <NuxtLink to="/terms">Terms</NuxtLink>
                    <NuxtLink to="/privacy">Privacy</NuxtLink>
                    <NuxtLink to="/blog">Blog</NuxtLink>
                </div>
                <div>
                    <h4>Support</h4>
                    <!-- <NuxtLink to="/about">About</NuxtLink> -->
                    <NuxtLink to="https://status.the-house-app.com" external target="_blank">
                        Status
                    </NuxtLink>
                    <NuxtLink to="/docs">Docs</NuxtLink>
                    <NuxtLink to="/faq">FAQ</NuxtLink>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
.footer {
    margin-top: 6.5rem;
    padding: 2rem;
    border-top: var(--divider-thin);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 0;
    margin-bottom: -35px;

    .footer-left {
        margin-bottom: 1rem;

        .footer-info {
            display: flex;
            align-items: center;

            .footer-logo {
                border-radius: .5rem;
                margin-right: 1rem;
            }

            .footer-text a {
                text-decoration: none;
            }
        }
    }

    .footer-right {
        .footer-columns {
            display: flex;
            flex-direction: row;
            gap: 5rem;
            text-align: left;

            h4 {
                font-weight: bold;
                font-size: 1rem;
                margin-bottom: 0.5rem;
            }

            a {
                display: block;
                color: var(--text-1);
                font-size: 0.9rem;
                text-decoration: none;
                margin: 0.25rem 0;
                transition: color 0.2s ease;

                &:hover {
                    color: var(--accent);
                }
            }
        }
    }
}

.link {
    color: var(--accent);
    font-weight: bold;
}

@media (max-width: 650px) {
    .footer {
        padding: 1rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1.5rem;
    }

    .footer-left {
        width: 100%;
        order: 2;
        margin-bottom: 0;

        .footer-info {
            justify-content: center;
            text-align: left;

            .footer-logo {
                margin-right: 0.5rem;
            }

            .footer-text {
                font-size: 0.85rem;
                word-wrap: wrap;
                word-spacing: normal;
                word-break: normal;
            }
        }
    }

    .footer-right {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1.5rem;
        order: 1;
        width: 100%;

        .footer-columns {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            gap: 0.5rem;
            width: 100%;

            h4 {
                font-size: 1rem;
            }

            a {
                font-size: 0.9rem;
                padding: 0.25rem 0;
            }
        }
    }
}
</style>
