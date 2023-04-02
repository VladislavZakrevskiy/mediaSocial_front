import {
    Box,
    Button,
    Container,
    CssBaseline,
    Typography,
  } from '@mui/material';
  import { ThemeProvider } from '@mui/material/styles';
  import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
  import { array, object, TypeOf, z } from 'zod';
  import { zodResolver } from '@hookform/resolvers/zod';
  import FileUpload from './FileUpload';
  import theme from '../../theme';
import { useUploadImageMutation } from '../../store/reducers/rtk query/ImageApi'
import { useAppSelector } from '../../hooks/reduxHooks';

  
  const imageUploadSchema = object({
    image: z.instanceof(File),
    images: array(z.instanceof(File)),
  });
  
  type IUploadImage = TypeOf<typeof imageUploadSchema>;
  
  function Upload() {
    const {user} = useAppSelector(state => state.AuthReducer)
    const [uploadImage] = useUploadImageMutation();
  
    const methods = useForm<IUploadImage>({
      resolver: zodResolver(imageUploadSchema),
    });
  
  
    const onSubmitHandler: SubmitHandler<IUploadImage> = (values) => {
      const formData = new FormData();
      formData.append('image', values.image);
      formData.append('user_id', user!.user_id)
      if (values.images.length > 0) {
        values.images.forEach((el) => formData.append('images', el));
      }

      uploadImage(formData);
    };
  
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth={false}>
          <Box
            component={'div'}
            display='flex'
            sx={{
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh',
            }}
          >
            <Box component={'div'} display='flex' flexDirection='column' sx={{ width: '30%' }}>
              <FormProvider {...methods}>
                <Box
                  component='form'
                  noValidate
                  autoComplete='off'
                  onSubmit={methods.handleSubmit(onSubmitHandler)}
                >
                  <Typography
                    textAlign='center'
                    variant='h4'
                    component='h1'
                    gutterBottom
                  >
                    Multiple Image Upload
                  </Typography>
                  <FileUpload limit={3} multiple name='images' />
                  <Button
                    variant='contained'
                    type='submit'
                    fullWidth
                    sx={{ py: '0.8rem', my: 2 }}
                  >
                    Submit Images
                  </Button>
                </Box>
              </FormProvider>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    );
  }
  
  export default Upload;
  