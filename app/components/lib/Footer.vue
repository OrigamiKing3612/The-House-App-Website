<template>
    <footer class="footer">
        <!-- <Card class="footer-card"> -->
        <div class="footer-left">
            <div class="footer-info">
                <img src="https://the-house-app.com/apple-touch-icon.png" alt="The House App Logo" title="The House App"
                    width="64" height="64" class="footer-logo" />
                <div class="footer-text">
                    <strong>OrigamiKing3612</strong><br />
                    &copy; 2024-2025 The House App. All rights reserved.
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
                    <NuxtLink to="/about">About</NuxtLink>
                    <NuxtLink to="https://status.the-house-app.com" external target="_blank">
                        Status
                    </NuxtLink>
                    <NuxtLink to="/faq">FAQ</NuxtLink>
                </div>
            </div>
        </div>
        <!-- </Card> -->
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

@media (max-width: $mobile-width) {
    .footer {
        padding: 1rem;

        .footer-left {
            transform: scale(.8);
        }

        .footer-right {
            .footer-columns {
                gap: 1rem;

                h4 {
                    font-size: 0.9rem;
                }

                a {
                    font-size: 0.6rem;
                }
            }
        }
    }
}
</style>
