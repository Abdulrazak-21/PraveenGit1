import {useState, useEffect} from 'react';
import axios from 'axios';
import {URLS} from '../constants';
import {Email} from '../interfaces/Email';

const useEmails = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [emails, setEmails] = useState<Email[]>([]);
  const [error, setError] = useState(null);

  function getProfilePhotos() {
    setIsLoading(true);
    axios
      .get(URLS.EMAILS)
      .then(response => {
        setIsLoading(false);
        setEmails(response.data);
      })
      .catch(e => {
        setIsLoading(false);
        setError(e);
      });
  }

  useEffect(function () {
    getProfilePhotos();
  }, []);

  return {isLoading, emails, error};
};

export default useEmails;
