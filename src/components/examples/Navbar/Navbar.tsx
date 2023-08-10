import { Flex, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const links = [
  {
    to: '/colocation',
    label: 'Colocation'
  },
  {
    to: '/composition',
    label: 'Composition'
  },
  {
    to: '/context',
    label: 'Context'
  },
  {
    to: '/forms',
    label: 'Forms'
  }
];

const Navbar = () => {
  return (
    <Flex justifyContent='space-between' p={4}>
      <Link to='/'>
        <Heading size='md'>
          <span style={{ marginRight: '0.5em' }}>📦</span>
          React State Management
        </Heading>
      </Link>
      <Flex gap={4}>
        {links.map((link) => (
          <Link key={link.to} to={link.to}>
            {link.label}
          </Link>
        ))}
      </Flex>
    </Flex>
  );
};

export default Navbar;
