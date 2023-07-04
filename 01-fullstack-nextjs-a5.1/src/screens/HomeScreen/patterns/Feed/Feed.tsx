import React from 'react';
import Box from "@src/components/Box/Box";
import Text from "@src/components/Text/Text";
import Icon from "@src/components/Icon/Icon";
import Image from "@src/components/Image/Image";
import Link from "@src/components/Link/Link";
import Button from "@src/components/Button/Button";
import { useTheme } from "@src/theme/ThemeProvider";

interface FeedProps {
  children: React.ReactNode;
}
export default function Feed({ children }) {
  const theme = useTheme();
  return (
    <Box
      styleSheet={{
        backgroundColor: theme.colors.neutral.x000,
        marginTop: '-228px',
        width: '100%',
        maxWidth: '683px',
        borderRadius: '8px',
        paddingVertical: '40px',
        paddingHorizontal: '32px',
      }}
    >
      {children}
    </Box>
  )
}

Feed.Header = () => {
  const theme = useTheme();

  return (
    <Box
      styleSheet={{
        borderBottom: `1px solid ${theme.colors.neutral.x200}`,
        paddingBottom: '24px',
        marginBottom: '24px',
      }}
    >
      <Box
        styleSheet={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: '16px',
          marginBottom: '16px'
        }}
      >
        <Image
          styleSheet={{
            width: { xs: '100px', md: '128px' },
            height: { xs: '100px', md: '128px' },
            borderRadius: '100%',
          }}
          src="https://github.com/joaovicttorbm.png"
          alt="Imagem de perfil do joaovicttorbm"
        />

        <Box
          styleSheet={{
            justifyContent: 'space-between',
          }}
        >
          <Box styleSheet={{flex: 1, justifyContent: 'space-between', display: {xs: 'none', md: 'flex'}}}>
            <Button fullWidth colorVariant="primary" size="xl" href="/">Newsletter</Button>
            <Button fullWidth colorVariant="neutral" size="xl"  href="/">Buy me a coffee</Button>
          </Box>
          <Box styleSheet={{flex: 1, justifyContent: 'space-between', display: {xs: 'flex', md: 'none'}}}>
            <Button fullWidth colorVariant="primary" size="xs" href="/">Newsletter</Button>
            <Button fullWidth colorVariant="neutral" size="xs"  href="/">Buy me a coffee</Button>
          </Box>
        </Box>
      </Box>
      <Text tag="h1" variant="heading4">
        João Victtor
      </Text>
      <Box styleSheet={{display: 'flex',justifyContent: 'flex-start',flexDirection: 'row'}}>
        <Link styleSheet={{marginRight: '10px'}} href="https://www.youtube.com/channel/UCCp9bVd_zCiq7FbM_7DAf0A">
          <Icon name="youtube" />
        </Link>
        {/* <Icon name="twitter" /> */}
        <Link  styleSheet={{margin: '0 10px'}} href='https://github.com/joaovicttorbm'>
          <Icon name="github" /> 
        </Link>
        <Link  styleSheet={{margin: '0 10px'}} href='https://www.instagram.com/joaovicttor01_/'>
          <Icon name="instagram" />
        </Link>
      </Box>
     
    </Box>
  )
}

Feed.Posts = () => {
  const theme = useTheme();
  return (
    <Box styleSheet={{display: 'flex',justifyContent: 'flex-start',flexDirection: 'row'}}>
      <Box styleSheet={{border: '2px solid', borderColor: theme.colors.warning.x500, borderRadius:'20px', padding: '5px'}}>
        <Image src='https://www.vskills.in/certification/blog/wp-content/uploads/2014/10/E-Books.jpg' alt='api de ebook'
        styleSheet={{
          width: { xs: '100px', md: '128px' },
          height: { xs: '100px', md: '128px' },
        }}
        />
        <Text tag='h2' styleSheet={{textAlign: 'center'}}>Primeira API</Text>
        <Button fullWidth colorVariant="primary" size="xl" >
           See Repository
        </Button>
      </Box>
    </Box>
  )
}
