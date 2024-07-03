import React, {useCallback, useEffect, useState} from 'react';
import {ContentType} from '../types';
import axiosApi from '../../axiosApi';
import {enqueueSnackbar} from 'notistack';
import {useParams} from 'react-router-dom';

const Content: React.FC = () => {
  const {pageName} = useParams();
  const [content, setContent] = useState<ContentType | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchContent = useCallback(async () => {
    try {
      setIsLoading(true);

      const response = await axiosApi.get<ContentType | null>(`/pages/${pageName}.json`);
      if (response.data) {
        setContent(response.data);
      }
    } catch (error) {
      enqueueSnackbar('Error fetching content', {variant: 'error'});
    } finally {
      setIsLoading(false);
    }
  }, [pageName]);

  useEffect(() => {
    void fetchContent();
  }, [fetchContent]);

  return (
    <>
      {isLoading && (
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      {content && (
        <div>
          <h2 className="text-center">{content.title}</h2>
          <p>{content.content}</p>
        </div>
      )}
    </>
  );
};

export default Content;