import { Typography, IconButton, Tooltip, Fade, Box } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects'
import StarIcon from '@mui/icons-material/Star'
import { usePhrasesDev } from '../hooks/usePhrasesDev'
import { useState } from 'react'

// Estado para feedback de copiado

export const PhrasesDevCard = () => {
  const {
    advice,
    nextFrase,
    prevFrase,
    toggleFavorite,
    goToFavorite,
    isFavorite,
    favorite,
    current,
    history,
    totalSeen,
  } = usePhrasesDev()
  const [fade, setFade] = useState(true)
  const [copied, setCopied] = useState(false)

  const handleNext = async () => {
    setFade(false)
    setTimeout(async () => {
      await nextFrase()
      setFade(true)
    }, 250)
  }

  const handlePrev = () => {
    setFade(false)
    setTimeout(() => {
      prevFrase()
      setFade(true)
    }, 250)
  }

  const handleGoToFavorite = () => {
    setFade(false)
    setTimeout(() => {
      goToFavorite()
      setFade(true)
    }, 250)
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100vw',
        position: 'fixed',
        left: 0,
        top: 0,
        zIndex: -1,
        background: 'linear-gradient(135deg,#232526 0%,#414345 100%)',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 0,
      }}
    >
      <svg
        width="100%"
        height="100%"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 0,
          opacity: 0.13,
        }}
      >
        <defs>
          <pattern
            id="dots"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="2" fill="#a3bffa" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>
      <Card
        sx={{
          width: {
            xs: '98vw',
            sm: 420,
            md: 540,
            lg: 680,
          },
          maxWidth: {
            xs: '98vw',
            sm: 440,
            md: 560,
            lg: 720,
          },
          minHeight: { xs: 220, sm: 260, md: 280 },
          maxHeight: { xs: 420, sm: 440, md: 460 },

          px: { xs: 1.5, sm: 3, md: 5 },
          py: { xs: 2, sm: 3.5, md: 4 },
          borderRadius: '28px',
          background: 'rgba(255,255,255,0.95)',
          boxShadow: '0 8px 32px 0 rgba(80,120,255,0.14)',
          backdropFilter: 'blur(16px)',
          border: '2px solid rgba(163,191,250,0.17)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
          overflow: 'visible',
          transition: 'box-shadow 0.3s',
          '&:hover': {
            boxShadow: '0 12px 48px 0 rgba(80,120,255,0.22)',
            borderColor: '#a3bffa',
          },
        }}
      >
        <CardContent sx={{ width: '100%', p: 0 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
              mt: 0.5,
              mb: 2,
            }}
          >
            <EmojiObjectsIcon
              sx={{ color: '#a3bffa', fontSize: 26, mb: -0.5 }}
            />
            <Typography
              variant="h6"
              sx={{
                textAlign: 'center',
                color: '#3a3a3a',
                fontWeight: 700,
                fontFamily: 'Poppins, sans-serif',
                letterSpacing: '0.04em',
                fontSize: { xs: '1.05rem', sm: '1.2rem', md: '1.4rem' },
                textShadow: '0 2px 8px #e0eafc',
                pb: 0.5,
                display: 'inline-block',
                background: 'linear-gradient(135deg,#1c2833 20%,#292423 90%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Inspírate Programando
            </Typography>
          </Box>

          <Fade in={fade} timeout={400}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
                minHeight: 110,
                justifyContent: 'center',
                p: { xs: 2, sm: 3, md: 4 },
                position: 'relative',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'stretch',
                  width: '100%',
                  justifyContent: 'center',
                  gap: 0,
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: { xs: 38, sm: 46, md: 54 },
                    color: '#111',
                    fontFamily: 'serif',
                    userSelect: 'none',
                    pointerEvents: 'none',
                    pr: 1,
                    height: '100%',
                    alignSelf: 'flex-start',
                    mt: { xs: 0.5, sm: 1 },
                  }}
                >
                  “
                </Box>
                <Typography
                  variant="body1"
                  sx={{
                    textAlign: 'center',
                    fontWeight: isFavorite ? 700 : 500,
                    color: isFavorite ? '#5f61e6' : '#222',
                    fontSize: { xs: '1.13rem', sm: '1.22rem', md: '1.27rem' },
                    fontFamily: 'Poppins',
                    maxWidth: {
                      xs: '82vw',
                      sm: '340px',
                      md: '520px',
                      lg: '600px',
                    },
                    margin: '0 auto',
                    lineHeight: 1.57,
                    letterSpacing: 0.18,
                    transition: 'color 0.3s, font-weight 0.3s',
                    textShadow: isFavorite
                      ? '0 2px 12px #a3bffa77'
                      : '0 1px 8px #e0eafc33',
                    zIndex: 1,
                    px: 1,
                    wordBreak: 'break-word',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  {advice}
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: { xs: 38, sm: 46, md: 54 },
                    color: '#111',
                    fontFamily: 'serif',
                    userSelect: 'none',
                    pointerEvents: 'none',
                    pl: 1,
                    height: '100%',
                    alignSelf: 'flex-end',
                    mb: { xs: 0.5, sm: 1 },
                    transform: 'rotateY(180deg)',
                  }}
                >
                  ”
                </Box>
              </Box>
              {isFavorite && (
                <Box
                  sx={{
                    position: 'absolute',
                    top: -24,
                    right: -12,
                    zIndex: 2,
                    animation: 'favBadge 1.2s infinite alternate',
                    '@keyframes favBadge': {
                      '0%': { transform: 'scale(1) rotate(-8deg)' },
                      '100%': { transform: 'scale(1.15) rotate(10deg)' },
                    },
                  }}
                >
                  <StarIcon
                    sx={{
                      color: '#ffe066',
                      fontSize: 36,
                      filter: 'drop-shadow(0 2px 8px #ffe06688)',
                    }}
                  />
                </Box>
              )}

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 1.3,
                  mt: 2,
                  mb: 1,
                  flexWrap: 'wrap',
                }}
              >
                <Tooltip title="Copiar frase">
                  <span>
                    <IconButton
                      onClick={async () => {
                        try {
                          await navigator.clipboard.writeText(advice)
                          setCopied(true)
                          setTimeout(() => setCopied(false), 1200)
                        } catch {
                          setCopied(false)
                        }
                      }}
                      sx={{
                        color: copied ? '#4caf50' : '#2874a6',
                        background: copied ? '#e8f5e9' : '#e3eafc',
                      }}
                    >
                      {copied ? (
                        <svg
                          width="22"
                          height="22"
                          fill="#4caf50"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.285 6.708l-11.285 11.285-5.285-5.285 1.414-1.414 3.871 3.871 9.871-9.871z" />
                        </svg>
                      ) : (
                        <svg
                          width="22"
                          height="22"
                          fill="#2874a6"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 21h-14c-1.104 0-2-.896-2-2v-14c0-1.104.896-2 2-2h7v2h-7v14h14v-7h2v7c0 1.104-.896 2-2 2zm-2-14v-4.414l-8.707 8.707 1.414 1.414 8.707-8.707z" />
                        </svg>
                      )}
                    </IconButton>
                  </span>
                </Tooltip>
                <Tooltip title="Compartir en X (Twitter)">
                  <span>
                    <IconButton
                      onClick={() => {
                        const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
                          advice
                        )}`
                        window.open(url, '_blank')
                      }}
                      sx={{ color: '#1da1f2', background: '#e3eafc' }}
                    >
                      <svg
                        width="22"
                        height="22"
                        fill="#1da1f2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482c-4.086-.205-7.713-2.164-10.141-5.144a4.822 4.822 0 0 0-.666 2.475c0 1.708.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417a9.868 9.868 0 0 1-6.102 2.104c-.396 0-.787-.023-1.175-.069a13.945 13.945 0 0 0 7.548 2.212c9.057 0 14.009-7.513 14.009-14.009 0-.213-.005-.426-.014-.637a10.012 10.012 0 0 0 2.457-2.548z" />
                      </svg>
                    </IconButton>
                  </span>
                </Tooltip>
                <Tooltip title="Compartir en Facebook">
                  <span>
                    <IconButton
                      onClick={() => {
                        const url = `https://www.facebook.com/sharer/sharer.php?u=&quote=${encodeURIComponent(
                          advice
                        )}`
                        window.open(url, '_blank')
                      }}
                      sx={{ color: '#4267B2', background: '#e3eafc' }}
                    >
                      <svg
                        width="22"
                        height="22"
                        fill="#4267B2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.326v21.348c0 .733.592 1.326 1.325 1.326h11.495v-9.294h-3.128v-3.622h3.128v-2.672c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.311h3.587l-.467 3.622h-3.12v9.294h6.116c.73 0 1.323-.593 1.323-1.326v-21.35c0-.734-.593-1.326-1.326-1.326z" />
                      </svg>
                    </IconButton>
                  </span>
                </Tooltip>
                <Tooltip title="Compartir en WhatsApp">
                  <span>
                    <IconButton
                      onClick={() => {
                        const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(
                          advice
                        )}`
                        window.open(url, '_blank')
                      }}
                      sx={{ color: '#25D366', background: '#e3eafc' }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="22"
                        height="22"
                        viewBox="0 0 48 48"
                      >
                        <path
                          fill="#fff"
                          d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"
                        ></path>
                        <path
                          fill="#fff"
                          d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"
                        ></path>
                        <path
                          fill="#cfd8dc"
                          d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"
                        ></path>
                        <path
                          fill="#40c351"
                          d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"
                        ></path>
                        <path
                          fill="#fff"
                          fill-rule="evenodd"
                          d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </IconButton>
                  </span>
                </Tooltip>
              </Box>
            </Box>
          </Fade>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: { xs: 1, sm: 2 },
              mt: { xs: 1.5, sm: 2 },
              width: '100%',
              flexWrap: 'wrap',
            }}
          >
            <Tooltip title="Anterior">
              <span>
                <IconButton
                  onClick={handlePrev}
                  disabled={current <= 0}
                  sx={{
                    color: '#fff',
                    background: '#2874a6',
                    mr: 1,
                    '&:hover': { background: '#1c2833' },
                  }}
                >
                  <ArrowBackIosNewIcon />
                </IconButton>
              </span>
            </Tooltip>
            <Tooltip
              title={
                isFavorite ? 'Quitar de favoritos' : 'Marcar como favorita'
              }
            >
              <IconButton
                onClick={toggleFavorite}
                sx={{
                  color: isFavorite ? '#ffe066' : '#fff',
                  background: 'rgba(40,116,166,0.8)',
                  '&:hover': { background: '#ffe06622' },
                }}
              >
                {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              </IconButton>
            </Tooltip>
            <Tooltip title="Ver favorita">
              <span>
                <IconButton
                  onClick={handleGoToFavorite}
                  disabled={!favorite}
                  sx={{
                    color: '#fff',
                    background: '#2874a6',
                    ml: 1,
                    '&:hover': { background: '#ffe06644' },
                  }}
                >
                  <StarIcon />
                </IconButton>
              </span>
            </Tooltip>
            <Tooltip title="Siguiente">
              <span>
                <IconButton
                  onClick={handleNext}
                  sx={{
                    color: '#fff',
                    background: '#2874a6',
                    ml: 1,
                    '&:hover': { background: '#1c2833' },
                  }}
                >
                  <ArrowForwardIosIcon />
                </IconButton>
              </span>
            </Tooltip>
          </Box>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mt: { xs: 2, sm: 3 },
              gap: { xs: 1, sm: 2 },
              width: '100%',
            }}
          >
            <Typography
              variant="caption"
              sx={{ color: '#222', fontFamily: 'Poppins', fontWeight: 400 }}
            >
              <span style={{ color: '#2874a6', fontWeight: 600 }}>Vistas:</span>{' '}
              <b>{totalSeen}</b>
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: '#222', fontFamily: 'Poppins', fontWeight: 400 }}
            >
              <span style={{ color: '#2874a6', fontWeight: 600 }}>
                Historial:
              </span>{' '}
              <b>
                {current + 1}/{history.length}
              </b>
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}
