import { css } from 'emotion'
import icons from './assets/dashboard-sprites.svg'

const SPRITES = new Map([
  ['report', '2px -30px'],
  ['campaign_sent', '2px -60px'],
  ['campaign_opened', '2px -90px'],
  ['campaign_clicked', '2px -120px'],
  ['campaign_purchase', '2px -150px'],
  ['subscribe', '2px -270px'],
  ['unsubscribe', '2px -180px'],
  ['abuse_report', '2px -210px'],
  ['bounced', '2px -240px'],
  ['import', '2px -300px'],
  ['inbox_inspection', '2px -331px'],
  ['profile_update', '2px -361px'],
  ['forward_to_friend', '2px -389px'],
  ['facebook_like', '2px -419p']
])

export const wrapper = css`
  position: relative;
  display: flex;
  padding: 18px 37px;
  border: 2px solid #dedddc;
  border-radius: 6px;
  margin-top: 36px;

  &::before {
    content: '';
    position: absolute;
    top: -31px;
    width: 2px;
    height: 22px;
    background: #e0e0e0;
    left: 65px;
  }
`

export const meta = css``

export const time = css``

export const circle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background-color: #c5e5de;
  margin-top: 18px;
`

export const icon = css`
  background-image: url(${icons});
  background-size: 30px auto;
  background-repeat: no-repeat;
  background-color: #0000;
  background-position: 2px 0;
  width: 35px;
  height: 30px;
  margin: 15px auto;

  ${Array.from(SPRITES).map(
    ([key, value]) => `&.${key} { background-position: ${value}; }`
  )}
`

export const content = css`
  margin-left: 37px;

  a {
    color: var(--color-brand-kale);
    text-decoration: none;
  }
`

export const title = css``

export const desc = css`
  margin-top: 12px;
`
